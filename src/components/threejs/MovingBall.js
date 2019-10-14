import * as THREE from "three"

var MAX_POINTS = 500

export default (scene, focalPointRadius, color) => {
  const group = new THREE.Group()

  // // geometry
  // const lineGeometry = new THREE.BufferGeometry()

  // // attributes
  // const positions = new Float32Array(MAX_POINTS * 3) // 3 vertices per point
  // lineGeometry.addAttribute("position", new THREE.BufferAttribute(positions, 3))

  // // draw range
  // const drawCount = 2 // draw the first 2 points, only
  // lineGeometry.setDrawRange(0, drawCount)

  // // material
  // const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 })

  // // line
  // const line = new THREE.Line(lineGeometry, lineMaterial)

  // const linePositions = line.geometry.attributes.position.array

  // // var x = (y = z = index = 0)

  // for (var i = 0, l = MAX_POINTS; i < l; i++) {
  //   linePositions[index++] = x
  //   linePositions[index++] = y
  //   linePositions[index++] = z

  //   x += (Math.random() - 0.5) * 30
  //   y += (Math.random() - 0.5) * 30
  //   z += (Math.random() - 0.5) * 30
  // }

  //Ball
  const geometry = new THREE.SphereBufferGeometry(
    2,
    focalPointRadius / 2,
    focalPointRadius / 2
  )
  const material = new THREE.MeshBasicMaterial({ color })
  const subjectMesh = new THREE.Mesh(geometry, material)
  // const subjectWireframe = new THREE.LineSegments(
  //   new THREE.EdgesGeometry(geometry),
  //   new THREE.LineBasicMaterial()
  // )

  group.add(subjectMesh)
  // group.add(subjectWireframe)

  scene.add(group)

  const offset = {
    x: Math.random(),
    y: Math.random(),
    z: Math.random(),
  }

  // group.rotation.z = (Math.random() * Math.PI) / 4

  // const scale = 4
  const speed = 0.02
  // const textureOffsetSpeed = 0.02
  // const xRad = 50
  // const linePositions = line.geometry.attributes.position.array

  function update(time) {
    // console.warn("time", time)
    const angle = time * speed
    //   rad * 0.5 * Math.sin(time + Math.PI / 4) /*- rad * Math.cos(time * 0.5)*/

    const x = focalPointRadius * 1.5 * Math.sin(time + offset.x * Math.PI)
    const y = (focalPointRadius / 2.5) * Math.sin(time + offset.y * Math.PI)
    const z = (focalPointRadius / 2) * Math.sin(2 * time + offset.z * Math.PI)

    group.position.set(x, y, z)
    // const y = 10 * Math.sin(2 * time)
    // const z = 32 + rad * Math.sin(time) /*- rad * Math.cos(time * 0.5)*/
    // const z = 15 + rad * Math.cos(time * 0.5) - rad * Math.sin(time * 0.5)
    // const y = rad * Math.sin(time * 0.5)
    // group.position.x = x
    // group.position.y = y
    // group.position.z = z
    group.rotation.z = angle

    // subjectMesh.position.z = z
    // subjectMesh.position.y = y
    // subjectMesh.position.y = y

    // subjectWireframe.position.x = x
    // subjectWireframe.position.y = y
    // line.geometry.attributes.position.needsUpdate = true // required after the first render
    // geometry
    const lineGeometry = new THREE.SphereBufferGeometry(2, 5, 5)

    // attributes
    const positions = new Float32Array(MAX_POINTS * 3) // 3 vertices per point
    lineGeometry.addAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    )

    // draw range
    const drawCount = 2 // draw the first 2 points, only
    lineGeometry.setDrawRange(0, drawCount)

    // material
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xfff })

    // line
    const line = new THREE.Line(lineGeometry, lineMaterial)
    line.position.set(x, y, z)
    scene.add(line)

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
