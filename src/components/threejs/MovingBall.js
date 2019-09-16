import * as THREE from "three"

export default (scene, position, color) => {
  const group = new THREE.Group()
  const geometry = new THREE.SphereGeometry(2, 32, 32)
  const material = new THREE.MeshBasicMaterial({ color })
  const subjectMesh = new THREE.Mesh(geometry, material)
  const subjectWireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial()
  )

  const { x, y, z } = position
  subjectMesh.position.set(x, y, z)
  subjectWireframe.position.set(x, y, z)

  group.add(subjectMesh)
  group.add(subjectWireframe)

  scene.add(group)

  // group.rotation.z = Math.PI / 4

  // const scale = 4
  // const speed = 0.02
  // const textureOffsetSpeed = 0.02
  const rad = 8

  function update(time) {
    // console.warn("time", time)
    // const angle = time * speed

    const x = rad * Math.tan(time * 0.5)
    // const y = rad * Math.sin(time * 0.5)
    subjectMesh.position.x = x
    // subjectMesh.position.y = y

    // subjectWireframe.position.x = x
    // subjectWireframe.position.y = y

    // subjectMesh.position.y = x
    // subjectMesh.position.z = x
    // group.rotation.y = angle
    // subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed
    // subjectWireframe.material.color.setHSL(Math.sin(angle * 2), 0.5, 0.5)
    // const scale = (Math.sin(angle * 8) + 6.4) / 5
    // subjectWireframe.scale.set(scale, scale, scale)
  }

  return {
    update,
  }
}
