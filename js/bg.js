import * as THREE from 'three';
import { randFloat } from 'three/src/math/MathUtils.js';
import * as EXTRAS from './classes'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

for (let i = 0; i < 800; i++)
{
    
    scene.add(new EXTRAS.Star(randFloat(500, 1000)));
}

scene.add(new EXTRAS.Star(120));


let node;

window.addEventListener("load", () => {
    node = document.body.appendChild( renderer.domElement );
    node.id = "c";
});

let pointer = new THREE.Vector2();

function render()
{
    camera.rotateY(0.0004);
    camera.rotateX(0.0001);
    renderer.render( scene, camera );
    


}

//animation loop
function animate() {
    render();
}

//resizes the window when called
function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize);

//sets the raycast starting 2d pointer
//(NOTE)::This is from one of the demos on the Threejs.org page
function onMouseMove(event)
{
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}
document.addEventListener( 'pointermove', onMouseMove );

renderer.setAnimationLoop( animate );
