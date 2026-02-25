<script lang="ts">
  import * as THREE from "three";
  import { onMount, onDestroy } from "svelte";

  const randFloat = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  class Star extends THREE.Mesh {
    distance: number;
    p: THREE.Vector3;
    constructor(distance = 0.0, geometry = baseGeometry) {
      super(
        geometry,
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(
            randFloat(0.2, 0.7),
            randFloat(0.2, 0.7),
            randFloat(0.2, 0.7),
          ),
        }),
      );

      this.distance = distance;

      this.p = new THREE.Vector3();
      this.p.randomDirection();
      this.p.multiplyScalar(distance);

      //this.rotation.set(new THREE.Vector3().randomDirection());

      this.position.set(this.p.x, this.p.y, this.p.z);
    }
  }

  const baseGeometry = new THREE.SphereGeometry(3, 5, 5);

  let node: HTMLCanvasElement;
  let pointer = new THREE.Vector2();
  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let renderer: THREE.WebGLRenderer;

  let sceneMeshes: THREE.Object3D[] = [];

  const raycaster = new THREE.Raycaster();

  const component_onload = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    scene.add(camera);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    for (let i = 0; i < 800; i++) {
      let star = new Star(randFloat(500, 1000));
      sceneMeshes.push(star);
      scene.add(star);
    }

    let bigstar = new Star(120);
    sceneMeshes.push(bigstar);
    scene.add(bigstar);

    node = window.document.body.appendChild(renderer.domElement);
    node.id = "c";

    renderer.setAnimationLoop(animate);
  };

  function render() {
    camera.rotateY(0.0004);
    camera.rotateX(0.0001);
    renderer.render(scene, camera);
  }

  //animation loop
  function animate() {
    render();
  }

  //resizes the window when called
  function onWindowResize() {
    //console.log(camera);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  //sets the raycast starting 2d pointer
  //(NOTE)::This is from one of the demos on the Threejs.org page
  function onMouseMove(event: MouseEvent) {
    pointer = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1, //x
      -(event.clientY / window.innerHeight) * 2 + 1, //y
    );
    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObjects(sceneMeshes, false);
  }

  onMount(component_onload);
</script>

<svelte:window on:resize={onWindowResize} on:pointermove={onMouseMove} />
