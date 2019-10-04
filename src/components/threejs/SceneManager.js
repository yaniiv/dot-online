/* eslint-disable */
import * as THREE from "three"
import chroma from "chroma-js"
import Stats from "stats.js"

import * as COLORS from "../../colors"
// import SceneSubject from './SceneSubject';
import BallSubject from "./BallSubject"
import GeneralLights from "./GeneralLights"
import MovingBall from "./MovingBall"
import Waves from "./Waves"
import OrbitControls from "three-orbitcontrols"

import isDesktop from "./utils"

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
  const renderer = buildRender(screenDimensions)
  const camera = buildCamera(screenDimensions)
  const sceneSubjects = createSceneSubjects(scene)
  const controls = buildControls()

  // https://github.com/mrdoob/stats.js/
  const stats = buildStats()

  function buildStats() {
    const stats = new Stats()
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom)

    return stats
  }

  function buildControls() {
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = false
    controls.enableZoom = false
    // controls.addEventListener("change", render) // call this only in static scenes (i.e., if there is no animation loop)
    // controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    // controls.dampingFactor = 0.25
    controls.screenSpacePanning = false
    controls.minDistance = 100
    controls.maxDistance = 5000
    controls.maxPolarAngle = Math.PI / 2
    controls.enableZoom = false

    // Point the controls - overrides camera.lookAt
    // controls.target = new THREE.Vector3(50, 0, 0)

    return controls
  }

  // => #FFC917 this is the color that I want the "I" to look like
  function buildScene() {
    const scene = new THREE.Scene()
    // const axesHelper = new THREE.AxesHelper(100)
    const chalkyTang = COLORS.BACKGROUND
    scene.background = new THREE.Color(chalkyTang)
    // scene.add(axesHelper)

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

    return renderer
  }

  function getCameraHeight() {
    // console.warn("getCameraHeight", window.innerWidth)

    const mobileAngle = {
      x: 40,
      y: 80,
      z: 10,
    }

    const desktopAngle = {
      x: 0,
      y: 80,
      z: 60,
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

  function createMovingBalls({ scene, focalRadius, color, numBalls }) {
    const colors = chroma
      .scale(COLORS.SMALLBALLGRADIENT)
      .mode("lch")
      .colors(numBalls)

    console.warn("colors", colors)

    const balls = colors.map(color => {
      return new MovingBall(scene, focalRadius, color)
    })

    return balls
  }

  function createStaticBalls({ scene, focalRadius }) {
    // const colors = chroma
    //   .scale(["#fafa6e", "#2A4858"])
    //   .mode("lch")
    //   .colors(2)

    return [
      new BallSubject(
        scene,
        focalRadius,
        COLORS.STATICBALLS[0],
        COLORS.STATICBALLS[1]
      ),
      new BallSubject(
        scene,
        -focalRadius,
        COLORS.STATICBALLS[1],
        COLORS.STATICBALLS[0]
      ),
      // new BallSubject(scene, { x: 10, y: 10, z: 40 }, "red"),
      // new BallSubject(scene, { x: 0, y: 0, z: 0 }, "#20B2AA"),
    ]
  }

  function createSceneSubjects(scene) {
    let focalRadius = 15

    if (isDesktop()) {
      focalRadius = 30
    }

    const movingBalls = createMovingBalls({
      scene,
      focalRadius,
      numBalls: 6,
    })

    const staticBalls = createStaticBalls({
      scene,
      focalRadius,
    })

    const sceneSubjects = [
      new GeneralLights(scene),
      ...staticBalls,
      ...movingBalls,
      // new Waves(scene),
    ]

    return sceneSubjects
  }

  function render() {
    stats.begin()

    const elapsedTime = clock.getElapsedTime()
    // const axesHelper = new THREE.AxesHelper(5)

    // controls.update() // only required if controls.enableDamping = true, or if controls.autoRotate = true

    for (let i = 0; i < sceneSubjects.length; i++)
      sceneSubjects[i].update(elapsedTime)

    // updateCameraPositionRelativeToMouse()

    renderer.render(scene, camera)

    stats.end()
  }

  function updateCameraPositionRelativeToMouse() {
    camera.position.x += (mousePosition.x * 0.05 - camera.position.x) * 0.05
    camera.position.y += (-(mousePosition.y * 0.05) - camera.position.y) * 0.05
    camera.lookAt(origin)
  }

  function onWindowResize() {
    // canvas is our window
    const { width, height } = canvas

    screenDimensions.width = width
    screenDimensions.height = height

    camera.aspect = width / height
    camera.updateProjectionMatrix()

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
