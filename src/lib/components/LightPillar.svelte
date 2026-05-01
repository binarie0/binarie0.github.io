<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  const qualitySettings = {
    high: {
      iterations: 20,
      waveIterations: 5,
      pixelRatio: 0,
      precision: "highp",
      stepMultiplier: 3,
    },
  };

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  const isLowEndDevice =
    isMobile ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

  const settings = qualitySettings.high;

  //declare our properties of the light pillar
  let {
    topColor = new THREE.Color("#9988dd"),
    bottomColor = new THREE.Color("#ff9e9e"),
    intensity = 1,
    rotationSpeed = 0.5,
    glowAmount = 0.015,
    pillarWidth = 3.5,
    pillarHeight = 0.3,
    noiseIntensity = 1.0,
    pillarRotation = 60,
  } = $props();
  let container: HTMLDivElement;
  let mousePosition = $state(new THREE.Vector2(0, 0));
  let webGLSupported = $state(true);
  let width = $state(0);
  let height = $state(0);
  let time = $state(0);
  let rotationSpeedValue = $state(rotationSpeed);

  let canvas: HTMLCanvasElement;
  let renderer: THREE.WebGLRenderer = $state(
    null as unknown as THREE.WebGLRenderer,
  );
  let material: THREE.ShaderMaterial;
  let scene: THREE.Scene;
  let camera: THREE.OrthographicCamera;
  let killAnimation = false;

  let raf = $state(0);

  onMount(() => {
    canvas = document.createElement("canvas");
    width = window.innerWidth;
    height = window.innerHeight;
    qualitySettings.high.pixelRatio = window.devicePixelRatio;
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    webGLSupported = !gl;

    renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference:
        isMobile || isLowEndDevice ? "high-performance" : "low-power",
      precision: settings.precision as "highp" | "mediump" | "lowp",
      stencil: false,
      depth: false,
    });

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    renderer.setSize(width, height);
    renderer.setPixelRatio(settings.pixelRatio);
    //renderer.setAnimationLoop(animate);
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1);
      }
    `;

    const fragmentShader = `
      precision ${settings.precision} float;
        uniform vec2 uMouse;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uRotCos;
      uniform float uRotSin;
      uniform float uPillarRotCos;
      uniform float uPillarRotSin;
      uniform float uWaveSin;
      uniform float uWaveCos;
      varying vec2 vUv;

      const float STEP_MULT = ${settings.stepMultiplier.toFixed(1)};
      const int MAX_ITER = ${settings.iterations};
      const int WAVE_ITER = ${settings.waveIterations};

      void main() {
      vec3 top = uTopColor;
      top.b += cos(uTime * 0.3);

      vec3 bot = uBottomColor;
      bot.r += sin(uTime * 0.3);

        vec2 uv = (vUv * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);

        uv = vec2(uPillarRotCos * uv.x - uPillarRotSin * uv.y, uPillarRotSin * uv.x + uPillarRotCos * uv.y);
        
        
        vec3 ro = vec3(uMouse * 0.0001, -9.0);
        vec3 rd = normalize(vec3(uv, 1.0));

        float rotC = uRotCos;
        float rotS = uRotSin;

        

        vec3 col = vec3(0.0);
        float t = 0.2;
        
        for(int i = 0; i < MAX_ITER; i++) {
          vec3 p = ro + rd * t;
          p.xz = vec2(rotC * p.x - rotS * p.z, rotS * p.x + rotC * p.z);

          vec3 q = p;
          q.y = p.y * uPillarHeight + uTime * 1.5;
          
          float freq = 1.0;
          float amp = 1.0;
          for(int j = 0; j < WAVE_ITER; j++) {
            q.xz = vec2(uWaveCos * q.x - uWaveSin * q.z, uWaveSin * q.x + uWaveCos * q.z);
            q += cos(q.zxy * freq - uTime * float(j) * 2.0) * amp;
            freq *= 2.0;
            amp *= 0.5;
          }
          
          float d = length(cos(q.xz)) - 0.4;
          d *= 4.0;
          float bound = length(p.xz) - uPillarWidth;
          float k = 4.0;
          float h = max(k - abs(d - bound), 0.0);
          d = max(d, bound) + h * h * 0.0625 / k;
          d = abs(d) * 0.15 + 0.01;

          float grad = clamp((15.0 - p.y) / 30.0, 0.0, 1.0);
          col += mix(bot, top, grad) / d;

          t += d * STEP_MULT;
        }

        float widthNorm = uPillarWidth / 3.0;
        col = tanh(col * uGlowAmount / widthNorm);
        
        col += fract(sin(dot(uv.xy, vec2(12.9898, 88.233)) * 43758.5453)) / 15.0 * uNoiseIntensity;
        
        gl_FragColor = vec4(col * uIntensity, 1.0);
      }
    `;

    const pillarRotRad = (pillarRotation * Math.PI) / 180;
    const waveSin = Math.sin(0.4);
    const waveCos = Math.cos(0.4);

    material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: mousePosition },
        uTopColor: { value: colorToVector3(topColor) },
        uBottomColor: { value: colorToVector3(bottomColor) },
        uIntensity: { value: intensity },
        uGlowAmount: { value: glowAmount },
        uPillarWidth: { value: pillarWidth },
        uPillarHeight: { value: pillarHeight },
        uNoiseIntensity: { value: noiseIntensity },
        uRotCos: { value: 1.0 },
        uRotSin: { value: 0.0 },
        uPillarRotCos: { value: Math.cos(pillarRotRad) },
        uPillarRotSin: { value: Math.sin(pillarRotRad) },
        uWaveSin: { value: waveSin },
        uWaveCos: { value: waveCos },
      },

      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    raf = window.requestAnimationFrame(animate);
    canvas = renderer.domElement;
    container.appendChild(canvas);
    canvas.style.mixBlendMode = "lighten";
    //console.log(settings);

    return () => {
      renderer.dispose();
      material.dispose();
      geometry.dispose();
      killAnimation = true;
      canvas.remove();
    };
  });

  const colorToVector3 = (color: THREE.Color) =>
    new THREE.Vector3(color.r, color.g, color.b);

  const parseColor = (hex: string): THREE.Vector3 => {
    const color = new THREE.Color(hex);
    return new THREE.Vector3(color.r, color.g, color.b);
  };

  const updatePosition = (mouseEvent: MouseEvent) => {
    if (width > 800)
      mousePosition = new THREE.Vector2(mouseEvent.clientX, mouseEvent.clientY);
  };

  let lastTime = performance.now();
  const targetFPS = 60;
  const frameTime = 1000 / targetFPS;

  const animate = (currentTime: number) => {
    if (!material || !renderer || !scene || !camera || killAnimation) return;

    const deltaTime = currentTime - lastTime;

    if (deltaTime >= frameTime) {
      time += 0.016 * rotationSpeedValue;
      const t = time;
      material.uniforms.uMouse.value = mousePosition;
      material.uniforms.uTime.value = t;
      material.uniforms.uRotCos.value = Math.cos(t * 0.3);
      material.uniforms.uRotSin.value = Math.sin(t * 0.3);
      renderer.render(scene, camera);
      lastTime = currentTime - (deltaTime % frameTime);
    }

    raf = window.requestAnimationFrame(animate);
  };
  const handleResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;

    renderer.setSize(width, height);
  };
</script>

<!--Actual HTML Code-->
<svelte:window on:resize={handleResize} on:mousemove={updatePosition} />
<div class="w-full h-full fixed top-0 left-0 -z-10" bind:this={container}></div>
