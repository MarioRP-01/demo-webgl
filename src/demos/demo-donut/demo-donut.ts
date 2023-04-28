import '/src/style.css'

import * as THREE from 'three'
import DonutScene from './DonutScene.ts'

const canvas = document.querySelector('canvas#webgl')

const scene = new DonutScene();
scene.initialize()

// CAMERA
const camera = new THREE.PerspectiveCamera(
  5, 
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 5
scene.add(camera)

// LIGHT
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(1, 2, 0)
scene.add(directionalLight)

// SIZES
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true, //suavizado de bordes
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)

renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5)

document
  .querySelector<HTMLDivElement>('#display')!
  .appendChild(renderer.domElement)


function animate() {
  requestAnimationFrame(animate)

  scene.update()

  renderer.render(scene, camera)
}

animate()