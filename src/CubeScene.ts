import * as THREE from 'three'

export default class CubeScene extends THREE.Scene
{
    private cube?: THREE.Mesh

    initialize()
    {
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        this.cube = new THREE.Mesh(geometry, material)
        this.add(this.cube)
    }

    update()
    {
        if (!this.cube) return

        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
    }
}