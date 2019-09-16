import SceneManager from "./SceneManager"

export default () => {
  let canvas
  let sceneManager
  let canvasHalfWidth
  let canvasHalfHeight

  function initialize(container) {
    canvas = createCanvas(document, container)
    sceneManager = new SceneManager(canvas)

    bindEventListeners()
    render()
  }

  // create canvas and add it to the dom - attach it to the document
  function createCanvas(document, container) {
    console.warn("container in crea te canvas", container)
    canvas = document.createElement("canvas")
    container.appendChild(canvas)
    return canvas
  }

  function deleteCanvas(document, container) {
    console.warn("container", container)
    console.warn("cont ainer.childN odes", container.childNodes)
    // Removes an element from the document
    //The list is LIVE so it will re-index each call
    container.removeChild(container.firstChild)
  }

  function bindEventListeners() {
    window.onresize = resizeCanvas
    window.onmousemove = mouseMove
    resizeCanvas()
  }

  function resizeCanvas() {
    canvas.style.width = "100%"
    canvas.style.height = "100%"

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    canvasHalfWidth = Math.round(canvas.offsetWidth / 2)
    canvasHalfHeight = Math.round(canvas.offsetHeight / 2)

    sceneManager.onWindowResize()
  }

  function mouseMove({ screenX, screenY }) {
    sceneManager.onMouseMove(
      screenX - canvasHalfWidth,
      screenY - canvasHalfHeight
    )
  }

  function render(time) {
    requestAnimationFrame(render)
    sceneManager.render()
  }

  function redraw(container) {
    console.log("re d  r aw _____- hellow this got called after")
    deleteCanvas(document, container)
    setTimeout(() => {
      initialize(container)
    }, 500)
  }

  return {
    initialize,
    redraw,
  }
}
