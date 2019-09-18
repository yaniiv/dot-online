import * as THREE from "three"

function vertexShader() {
  return `
 
  attribute float scale;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = scale * ( 300.0 / - mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
  }
  `
}

function fragmentShader() {
  return `
  uniform vec3 color;
  void main() {
    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
    gl_FragColor = vec4( color, 1.0 );
  }
  `
}

export default (scene, position, color) => {
  const SEPARATION = 50
  const AMOUNTX = 20
  const AMOUNTY = 20

  let particles = 0
  let count = 0

  const numParticles = AMOUNTX * AMOUNTY
  const positions = new Float32Array(numParticles * 3)
  const scales = new Float32Array(numParticles)
  let i = 0,
    j = 0
  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2 // x
      positions[i + 1] = 0 // y
      positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2 // z
      scales[j] = 1
      i += 3
      j++
    }
  }
  const geometry = new THREE.BufferGeometry()
  geometry.addAttribute("position", new THREE.BufferAttribute(positions, 3))
  geometry.addAttribute("scale", new THREE.BufferAttribute(scales, 1))
  const material = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color("black") },
    },
    fragmentShader: fragmentShader(),
    vertexShader: vertexShader(),
  })
  //
  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  function update(time) {
    const positions = particles.geometry.attributes.position.array
    const scales = particles.geometry.attributes.scale.array
    let i = 0
    let j = 0

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i + 1] =
          Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50
        scales[j] =
          (Math.sin((ix + count) * 0.3) + 1) * 8 +
          (Math.sin((iy + count) * 0.5) + 1) * 8
        i += 3
        j++
      }
    }
    particles.geometry.attributes.position.needsUpdate = true
    particles.geometry.attributes.scale.needsUpdate = true
    count += 0.1
  }

  return {
    update,
  }
}
