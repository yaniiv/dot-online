import * as THREE from "three"
import alphaTexture from "./textures/stripes_gradient.jpg"

export default (scene) => {
  const group = new THREE.Group()

  function CustomSinCurve(scale) {
    THREE.Curve.call(this)

    this.scale = scale === undefined ? 1 : scale
  }

  CustomSinCurve.prototype = Object.create(THREE.Curve.prototype)
  CustomSinCurve.prototype.constructor = CustomSinCurve

  CustomSinCurve.prototype.getPoint = function (t) {
    var tx = t * 3 - 1.5
    var ty = Math.sin(2 * Math.PI * t)
    var tz = 0

    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale)
  }

  var path = new CustomSinCurve(10)
  var geometry = new THREE.TubeGeometry(path, 20, 2, 8, false)
  var material = new THREE.MeshStandardMaterial({
    color: "#000",
    transparent: true,
    side: THREE.DoubleSide,
    alphaTest: 0.5,
  })
  var subjectMesh = new THREE.Mesh(geometry, material)

  const subjectWireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial()
  )
  group.add(subjectMesh)
  group.add(subjectWireframe)

  scene.add(group)

  group.rotation.z = Math.PI / 4

  const speed = 0.02
  const textureOffsetSpeed = 0.02

  function update(time) {
    // const angle = time*speed;
    // group.rotation.y = angle;
    // subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;
    // subjectWireframe.material.color.setHSL( Math.sin(angle*2), 0.5, 0.5 );
    // const scale = (Math.sin(angle*8)+6.4)/5;
    // subjectWireframe.scale.set(scale, scale, scale)
  }

  return {
    update,
  }
}
