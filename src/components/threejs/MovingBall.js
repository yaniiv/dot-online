import * as THREE from "three"

var MAX_POINTS = 500

export default (scene, ballProperties, color) => {
  const group = new THREE.Group()
  const {
    focalRadius,
    ballRadius,
    heightSegments,
    widthSegments,
  } = ballProperties
  //Ball
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
  const speed = 0.02
  // const textureOffsetSpeed = 0.02
  // const xRad = 50
  // const linePositions = line.geometry.attributes.position.array

  function update(time) {
    // console.warn("time", time)
    const angle = time * speed
    //   rad * 0.5 * Math.sin(time + Math.PI / 4) /*- rad * Math.cos(time * 0.5)*/

    const x = focalRadius * 1.5 * Math.sin(time + offset.x * Math.PI)
    const y = (focalRadius / 2.5) * Math.sin(time + offset.y * Math.PI) + 20
    const z = (focalRadius / 2) * Math.sin(2 * time + offset.z * Math.PI)

    group.position.set(x, y, z)
    // const y = 10 * Math.sin(2 * time)
    // const z = 32 + rad * Math.sin(time) /*- rad * Math.cos(time * 0.5)*/
    // const z = 15 + rad * Math.cos(time * 0.5) - rad * Math.sin(time * 0.5)
    // const y = rad * Math.sin(time * 0.5)
    // group.position.x = x
    // group.position.y = y
    // group.position.z = z
    group.rotation.z = angle

    // sphere.position.z = z
    // sphere.position.y = y
    // sphere.position.y = y

    // sphereFrame.position.x = x
    // sphereFrame.position.y = y
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

    // sphere.position.y = x
    // sphere.position.z = x
    // group.rotation.y = angle
    // subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed
    // sphereFrame.material.color.setHSL(Math.sin(angle * 2), 0.5, 0.5)
    // const scale = (Math.sin(angle * 8) + 6.4) / 5
    // sphereFrame.scale.set(scale, scale, scale)
  }

  return {
    update,
  }
}
