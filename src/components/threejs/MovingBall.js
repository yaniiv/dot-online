import * as THREE from "three"

export default (scene, ballProperties, color) => {
  const group = new THREE.Group()
  const {
    focalRadius,
    ballRadius,
    heightSegments,
    widthSegments,
  } = ballProperties

  const geometry = new THREE.SphereBufferGeometry(
    ballRadius,
    widthSegments,
    heightSegments
  )

  const material = new THREE.MeshBasicMaterial({ color })

  const sphere = new THREE.Mesh(geometry, material)
  const sphereFrame = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial()
  )

  sphere.castShadow = true //default is false
  sphere.receiveShadow = false //default

  group.add(sphere)
  group.add(sphereFrame)

  scene.add(group)

  const offset = {
    x: Math.random(),
    y: Math.random(),
    z: Math.random(),
  }

  // const scale = 4
  const speed = 0.005

  function update(time) {
    // const angle = time * speed

    const x = focalRadius * 1.5 * Math.sin(time + offset.x * Math.PI)
    const y = (focalRadius / 2.5) * Math.sin(time + offset.y * Math.PI) + 20
    const z = (focalRadius / 2) * Math.sin(2 * time + offset.z * Math.PI)

    group.position.set(x, y, z)
    // group.rotation.z = angle
  }

  return {
    update,
  }
}
