import React, { Component } from "react"
import { css } from "@emotion/core"

import ThreeEntryPointManager from "./ThreeEntryPointManager"
import "./duality.css"
import * as SIZES from "../../sizes"

const duality = css`
  margin: auto;
  height: ${SIZES.DUALITY};
  width: 100%;
`

function throttle(f, t) {
  return function(args) {
    let previousCall = this.lastCall
    this.lastCall = Date.now()
    if (
      previousCall === undefined || // function is being called for the first time
      this.lastCall - previousCall > t
    ) {
      // throttle time has elapsed
      f(args)
    }
  }
}

export default class Duality extends Component {
  constructor(props) {
    super(props)
    this.ThreeEntryPoint = new ThreeEntryPointManager()
  }

  // passes the mounted div through
  componentDidMount() {
    this.ThreeEntryPoint.initialize(this.threeRootElement)

    console.warn("compone nt did mount he ld dl ox")
  }

  redrawCanvas = throttle(() => {
    console.warn("called redraw canvbas")
    this.ThreeEntryPoint.redraw(this.threeRootElement)
  }, 1000)
  //
  componentDidUpdate() {
    // this.redrawCanvas()
    console.warn("component updated")
  }

  render() {
    return (
      <div
        // className="Duality-Duality"
        css={duality}
        ref={element => (this.threeRootElement = element)}
      />
    )
  }
}
