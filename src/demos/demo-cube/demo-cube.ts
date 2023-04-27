import '/src/style.css'

import * as THREE from 'three'
import CubeScene from './CubeScene'

const canvas = document.querySelector('canvas#webgl')

const cube_scene = new CubeScene()
cube_scene.initialize()

const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({
  canvas: canvas!
})

renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5)

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