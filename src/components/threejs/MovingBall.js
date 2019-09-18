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

  const offset = {
    x: Math.random(),
    y: Math.random(),
    z: Math.random(),
  }

  // group.rotation.z = Math.PI / 4

  // const scale = 4
  const speed = 0.02
  // const textureOffsetSpeed = 0.02
  const xRad = 50

  function update(time) {
    // console.warn("time", time)
    // const angle = time * speed
    // const x =

    //   rad * 0.5 * Math.sin(time + Math.PI / 4) /*- rad * Math.cos(time * 0.5)*/

    const x = 70 * Math.sin(time + offset.x * Math.PI)
    const y = 20 * Math.sin(time + offset.x * Math.PI)
    const z = 20 * Math.sin(2 * time + offset.x * Math.PI)
    // const y = 10 * Math.sin(2 * time)
    // const z = 32 + rad * Math.sin(time) /*- rad * Math.cos(time * 0.5)*/
    // const z = 15 + rad * Math.cos(time * 0.5) - rad * Math.sin(time * 0.5)
    // const y = rad * Math.sin(time * 0.5)
    subjectMesh.position.x = x
    subjectMesh.position.y = y
    subjectMesh.position.z = z
    // subjectMesh.position.z = z
    // subjectMesh.position.y = y
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