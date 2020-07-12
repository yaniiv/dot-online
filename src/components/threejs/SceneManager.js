/* eslint-disable */
import * as THREE from "three"
import chroma from "chroma-js"
import Stats from "stats.js"
import alphaTexture from "./textures/stripes_gradient.jpg"

import * as COLORS from "../../colors"
import * as NUMBERS from "../../numbers"

import StaticBall from "./StaticBall"
import MovingBall from "./MovingBall"
import DirectionalLights from "./DirectionalLights"
import FloorPlane from "./FloorPlane"
// import GeneralLights from "./GeneralLights"
import Waves from "./Waves"
import OrbitControls from "three-orbitcontrols"

import { isDesktop } from "../../utils"

export default canvas => {
  const clock = new THREE.Clock()
  const origin = new THREE.Vector3(0, 0, 0)

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height,
  }

  const mousePosition = {
    x: 0,
    y: 0,
  }

  const scene = buildScene()
  const camera = buildCamera(screenDimensions)
  const renderer = buildRender(screenDimensions)
  const sceneSubjects = createSceneSubjects(scene)
  const controls = buildControls()

  // https://github.com/mrdoob/stats.js/
  // const stats = buildStats()
  // buildAxisHelper(scene)

  function buildAxisHelper(scene) {
    const axesHelper = new THREE.AxesHelper(100)
    scene.add(axesHelper)
  }

  function buildStats() {
    const stats = new Stats()
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom)

    return stats
  }

  function buildControls() {
    const controls = new OrbitControls(camera, renderer.domElement)
    // controls.autoRotate = false
    controls.enableZoom = false
    // controls.addEventListener("change", render) // call this only in static scenes (i.e., if there is no animation loop)
    // controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    // controls.dampingFactor = 0.25
    controls.screenSpacePanning = false
    controls.minDistance = 100
    controls.maxDistance = 5000
    controls.maxPolarAngle = Math.PI / 2
    controls.enableZoom = false

    controls.enabled = false
    if (isDesktop()) {
      controls.enabled = true
    }
    // Point the controls - overrides camera.lookAt
    // controls.target = new THREE.Vector3(50, 0, 0)
    return controls
  }

  // => #FFC917 this is the color that I want the "I" to look like
  function buildScene() {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(COLORS.BACKGROUND)

    return scene
  }

  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1

    renderer.setPixelRatio(DPR)
    renderer.setSize(width, height)

    renderer.gammaInput = true
    renderer.gammaOutput = true

    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    return renderer
  }

  function getCameraHeight() {
    const mobileAngle = {
      x: 40,
      y: 80,
      z: 80,
    }

    const desktopAngle = {
      x: 100,
      y: 60,
      z: 140,
    }

    if (isDesktop()) {
      return desktopAngle
    }

    return mobileAngle
  }

  function buildCamera({ width, height }) {
    const aspectRatio = width / height
    const fieldOfView = 60
    const nearPlane = 4
    const farPlane = 500
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    )

    const cameraPosition = getCameraHeight()
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z)

    return camera
  }

  function createMovingBalls({ scene, ballProperties, color, numBalls }) {
    const colors = chroma
      .scale(COLORS.SMALLBALLGRADIENT)
      .mode("lch")
      .colors(numBalls)

    const balls = colors.map(color => {
      return new MovingBall(scene, ballProperties, color)
    })

    return balls
  }

  function createStaticBalls({ scene, ballProperties }) {
    return [
      new StaticBall({
        scene,
        ballProperties,
        xPosition: ballProperties.xPosition,
        color: COLORS.STATICBALLS[0],
        meshColor: COLORS.STATICBALLS[0],
      }),
      new StaticBall({
        scene,
        ballProperties,
        xPosition: -ballProperties.xPosition,
        color: COLORS.STATICBALLS[1],
        meshColor: COLORS.STATICBALLS[1],
      }),
    ]
  }

  function createSceneSubjects(scene) {
    let staticBallProperties = NUMBERS.STATIC_BALL_PROPERTIES.mobile
    let movingBallProperties = NUMBERS.MOVING_BALL_PROPERTIES.mobile

    if (isDesktop()) {
      staticBallProperties = NUMBERS.STATIC_BALL_PROPERTIES.desktop
      movingBallProperties = NUMBERS.MOVING_BALL_PROPERTIES.desktop
    }
    // const waves = new Waves(scene)
    // new FloorPlane(scene)
    // new DirectionalLights(scene)

    const staticBalls = createStaticBalls({
      scene,
      ballProperties: staticBallProperties,
    })

    const movingBalls = createMovingBalls({
      scene,
      ballProperties: movingBallProperties,
      focalRadius: movingBallProperties.focalRadius,
      numBalls: NUMBERS.NUM_BALLS,
    })

    const sceneSubjects = [...movingBalls, ...staticBalls]

    return sceneSubjects
  }

  function render() {
    // stats.begin()

    const elapsedTime = clock.getElapsedTime()
    // const axesHelper = new THREE.AxesHelper(5)

    // controls.update() // only required if controls.enableDamping = true, or if controls.autoRotate = true

    for (let i = 0; i < sceneSubjects.length; i++)
      sceneSubjects[i].update(elapsedTime)

    renderer.render(scene, camera)

    // stats.end()
  }

  /*
  function updateCameraPositionRelativeToMouse() {
    camera.position.x += (mousePosition.x * 0.05 - camera.position.x) * 0.05
    camera.position.y += (-(mousePosition.y * 0.05) - camera.position.y) * 0.05
    camera.lookAt(origin)
  }
  */

  function onWindowResize() {
    const { width, height } = canvas

    screenDimensions.width = width
    screenDimensions.height = height

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    if (isDesktop()) {
      controls.enabled = true
    } else {
      controls.enabled = false
    }

    renderer.setSize(width, height)
  }

  function onMouseMove(x, y) {
    mousePosition.x = x
    mousePosition.y = y
  }

  return {
    render,
    onWindowResize,
    onMouseMove,
  }
}
