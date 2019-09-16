import * as THREE from "three"
// import SceneSubject from './SceneSubject';
import BallSubject from "./BallSubject"
import GeneralLights from "./GeneralLights"
import MovingBall from "./MovingBall"
import OrbitControls from "three-orbitcontrols"

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

  function buildControls() {
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = false
    controls.enableZoom = false
    // controls.addEventListener("change", render) // call this only in static scenes (i.e., if there is no animation loop)
    controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25
    controls.screenSpacePanning = false
    controls.minDistance = 100
    controls.maxDistance = 5000
    controls.maxPolarAngle = Math.PI / 2
    controls.enableZoom = false

    // Point the controls - overrides camera.lookAt
    // controls.target = new THREE.Vector3(50, 0, 0)

    return controls
  }

  function buildScene() {
    const scene = new THREE.Scene()
    const axesHelper = new THREE.AxesHelper(100)

    scene.background = new THREE.Color("#FFECCC")
    scene.add(axesHelper)

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

    camera.position.x = 80
    camera.position.y = 50
    camera.position.z = 80

    return camera
  }

  function createSceneSubjects(scene) {
    const sceneSubjects = [
      new GeneralLights(scene),
      // new BallSubject(scene, { x: 10, y: 10, z: 40 }, "red"),
      // new BallSubject(scene, { x: 0, y: 0, z: 0 }, "#20B2AA"),
      new BallSubject(scene, { x: 30, y: 0, z: 0 }, "indigo"),
      new BallSubject(scene, { x: 0, y: 0, z: 30 }, "red"),
      new MovingBall(scene, { x: 0, y: 0, z: 0 }, "black"),
      // new BallSubject(scene, { x: 50, y: 20, z: 10 }, "green"),
      // new BallSubject(scene, { x: 10, y: 20, z: 30 }, "red"),
      // new BallSubject(scene, { x: 0, y: 0, z: 10 }, "red"),
    ]

    return sceneSubjects
  }

  function render() {
    const elapsedTime = clock.getElapsedTime()
    // const axesHelper = new THREE.AxesHelper(5)

    controls.update() // only required if controls.enableDamping = true, or if controls.autoRotate = true

    for (let i = 0; i < sceneSubjects.length; i++)
      sceneSubjects[i].update(elapsedTime)

    // updateCameraPositionRelativeToMouse()

    renderer.render(scene, camera)
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
