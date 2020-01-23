import * as THREE from "three"
import * as COLORS from "../../colors"

export default scene => {
  // lightOut.position.set(40, 20, 40)

  var light = new THREE.DirectionalLight(COLORS.PURPLE, 1)
  light.position.set(0, 90, 0) //default; light shining from top
  light.castShadow = true // default false
  light.shadow.mapSize.width = 1512 // default
  light.shadow.mapSize.height = 1512 // default
  light.shadow.camera.near = 0.5 // default
  light.shadow.camera.far = 100 // default
  light.shadow.camera.top = 80
  light.shadow.camera.bottom = -80
  light.shadow.camera.left = 80
  light.shadow.camera.right = -80

  scene.add(light)
}
