import * as THREE from "three"
import * as COLORS from "../../colors"

export default (scene) => {
  var planeGeometry = new THREE.PlaneBufferGeometry(500, 500)
  var planeMaterial = new THREE.MeshStandardMaterial({
    color: COLORS.PURPLE,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.1,
    metalness: 0.1,
  })
  var plane = new THREE.Mesh(planeGeometry, planeMaterial)

  plane.rotateX(29.827)
  plane.receiveShadow = true

  scene.add(plane)
}
