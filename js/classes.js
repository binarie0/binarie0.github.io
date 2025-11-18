import * as THREE from 'three';
import { randFloat } from 'three/src/math/MathUtils.js';

const baseGeometry = new THREE.SphereGeometry(3,5,5);
export
class Star extends THREE.Mesh
{
    constructor(distance = 0.0, geometry = baseGeometry)
    {
        super(
            geometry,
            new THREE.MeshBasicMaterial({
                color: new THREE.Color(randFloat(0.2, 0.7), randFloat(0.2, 0.7), randFloat(0.2, 0.7)),
                
            }));
        
        this.distance = distance;
    
        this.p = new THREE.Vector3();
        this.p.randomDirection();
        this.p.multiplyScalar(distance);

        //this.rotation.set(new THREE.Vector3().randomDirection());

        this.position.set(this.p.x, this.p.y, this.p.z);
    }
}