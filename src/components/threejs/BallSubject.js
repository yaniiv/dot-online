/* eslint-disable */
import * as THREE from "three"

import * as NUMBERS from "../../constants/numbers"

export default ({ scene, ballProperties, xPosition, color, meshColor }) => {
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
  const subjectMesh = new THREE.Mesh(geometry, material)
  const subjectWireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    // https://threejs.org/docs/#api/en/materials/LineBasicMaterial
    new THREE.LineBasicMaterial({
      color: meshColor,
    })
  )

  // const { focalPointRadius, y, z } = position
  subjectMesh.position.set(xPosition, 0, 0)
  subjectWireframe.position.set(xPosition, 0, 0)

  group.add(subjectMesh)
  // group.add(subjectWireframe)

  scene.add(group)

  // group.rotation.z = Math.PI / 4

  const scale = 4
  const speed = 0.02
  const tepositiontureOffsetSpeed = 0.02

  function update(time) {
    // const angle = time * speed
    // group.rotation.y = angle
    // subjectMaterial.alphaMap.offset.y = 0.55 + time * tepositiontureOffsetSpeed
    // subjectWireframe.material.color.setHSL(Math.sin(angle * 2), 0.5, 0.5)
    // const scale = (Math.sin(angle * 8) + 6.4) / 5
    // subjectWireframe.scale.set(scale, scale, scale)
  }

  return {
    update,
  }
}
