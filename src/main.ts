import './style.css'

import * as THREE from 'three'
import CubeScene from './CubeScene';

import LoadService from './services/LoadService';

import BlasterScene from './BlasterScene';

const width = window.innerWidth;
const height = window.innerHeight;

//const load_service = new LoadService()

// await load_service.load_html(
//   document.querySelector<HTMLDivElement>('#app')!,
//   'src/templates/index.html'
// )
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('app') as HTMLCanvasElement
})
renderer.setSize(width, height)

const camera = new THREE.PerspectiveCamera(
  75, //campo de visión, 60 es el valor por defecto que usa unity
  width / height, //relación de aspecto
  0.1, //near plane, cómo de cerca está de la cámara
  1000 //far plane, cómo de lejos está
)

const scene = new THREE.Scene()
const scene_shooter = new BlasterScene(camera)

const canvas = document.querySelector('canvas#webgl')


scene_shooter.initialize()


const cube_scene = new CubeScene()
cube_scene.initialize()

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

  cube_scene.update()

  renderer.render(cube_scene, camera)
}

animate()
