import SceneManager from "./SceneManager"

export default class ThreeEntryPointManager {
  constructor() {
    this.isPaused = false
    this.canvas = null
    this.sceneManager = null
    this.canvasHalfWidth = null
    this.canvasHalfHeight = null
  }

  initialize = container => {
    this.createCanvas(document, container)
    this.sceneManager = new SceneManager(this.canvas)
    this.bindEventListeners()
    this.render()
  }

  pause = () => {
    this.isPaused = true
    this.render()
  }

  resume = () => {
    this.isPaused = false
    this.render()
  }

  // create canvas and add it to the dom - attach it to the document
  createCanvas = (document, container) => {
    this.canvas = document.createElement("canvas")
    container.appendChild(this.canvas)
  }

  bindEventListeners = () => {
    window.onresize = this.resizeCanvas
    window.onmousemove = this.mouseMove
    this.resizeCanvas()
  }

  resizeCanvas = () => {
    this.canvas.style.width = "100%"
    this.canvas.style.height = "100%"

    this.canvas.width = this.canvas.offsetWidth
    this.canvas.height = this.canvas.offsetHeight

    this.canvasHalfWidth = Math.round(this.canvas.offsetWidth / 2)
    this.canvasHalfHeight = Math.round(this.canvas.offsetHeight / 2)

    this.sceneManager.onWindowResize()
  }

  mouseMove = ({ screenX, screenY }) => {
    this.sceneManager.onMouseMove(
      screenX - this.canvasHalfWidth,
      screenY - this.canvasHalfHeight
    )
  }

  render = () => {
    if (this.isPaused) {
      // console.warn("return empty from render because isPaused")
      return
    }

    requestAnimationFrame(this.render)
    this.sceneManager.render()
  }
}
