
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class CubeScene extends THREE.Scene
{
    private donut?: THREE.Object3D;
    initialize(): void {
        const loader = new GLTFLoader();
        loader.load(
        '/assets//demo-donut/scene.gltf',
        (gltf) => {
            this.donut = gltf.scene;
            this.add(this.donut);
        },
        undefined,
        (error) => console.error(error)
    );
  }
  public update(): void {
    if (!this.donut) return;

    this.donut.rotation.x += 0.01;
    this.donut.rotation.y += 0.01;
  }
}