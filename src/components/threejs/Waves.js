import * as THREE from "three"

function vertexShader() {
  return `
  attribute float scale;

  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_PointSize = scale * ( 300.0 / - mvPosition.z );
  gl_Position = projectionMatrix * mvPosition;
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
  const SEPARATION = 100
  const AMOUNTX = 50
  const AMOUNTY = 50

  var container, stats
  var camera, scene, renderer
  var particles,
    count = 0
  var mouseX = 0,
    mouseY = 0
  var windowHalfX = window.innerWidth / 2
  var windowHalfY = window.innerHeight / 2

  var numParticles = AMOUNTX * AMOUNTY
  var positions = new Float32Array(numParticles * 3)
  var scales = new Float32Array(numParticles)
  var i = 0,
    j = 0
  for (var ix = 0; ix < AMOUNTX; ix++) {
    for (var iy = 0; iy < AMOUNTY; iy++) {
      positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2 // x
      positions[i + 1] = 0 // y
      positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2 // z
      scales[j] = 1
      i += 3
      j++
    }
  }
  var geometry = new THREE.BufferGeometry()
  geometry.addAttribute("position", new THREE.BufferAttribute(positions, 3))
  geometry.addAttribute("scale", new THREE.BufferAttribute(scales, 1))
  var material = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0xffffff) },
    },
    fragmentShader: fragmentShader(),
    vertexShader: vertexShader(),
    // vertexShader: document.getElementById("vertexshader").textContent,
    // fragmentShader: document.getElementById("fragmentshader").textContent,
  })
  //
  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  function update(time) {
    var positions = particles.geometry.attributes.position.array
    var scales = particles.geometry.attributes.scale.array
    var i = 0,
      j = 0
    for (var ix = 0; ix < AMOUNTX; ix++) {
      for (var iy = 0; iy < AMOUNTY; iy++) {
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
