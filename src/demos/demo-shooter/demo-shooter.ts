import '/src/style.css'

import * as THREE from 'three'
import BlasterScene from './BlasterScene';

const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('webgl-shooter') as HTMLCanvasElement
})

const camera = new THREE.PerspectiveCamera(
  75, //campo de visión, 60 es el valor por defecto que usa unity
  width / height, //relación de aspecto
  0.1, //near plane, cómo de cerca está de la cámara
  1000 //far plane, cómo de lejos está
)

renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5)

const scene_shooter = new BlasterScene(camera)
scene_shooter.initialize()

function tick() {
  scene_shooter.update()
  renderer.render(scene_shooter, camera)
  requestAnimationFrame(tick)
}

tick()

renderer.render(scene_shooter, camera)

document
  .querySelector<HTMLDivElement>('#display')!
  .appendChild(renderer.domElement)

camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)
}

animate()
