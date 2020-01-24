import React, { Component } from "react"
import { css } from "@emotion/core"

import ThreeEntryPointManager from "./ThreeEntryPointManager"
// import Intro from "../about/Intro"

const duality = css`
  /* position: sticky;
  top: 0;
  z-index: 1; */
  margin: auto;
  height: 100vh;
  width: 100%;
`

export default class Duality extends Component {
  constructor(props) {
    super(props)

    this.ThreeEntryPoint = null
  }

  componentDidMount() {
    this.ThreeEntryPoint = new ThreeEntryPointManager()
    this.ThreeEntryPoint.initialize(this.threeRootElement)
  }

  componentDidUpdate() {
    if (this.props.pauseRender) {
      // console.warn("PAUSE duality animation")
      this.ThreeEntryPoint.pause()
    } else {
      // console.warn("PLAY duality animation")
      this.ThreeEntryPoint.resume()
    }
  }

  render() {
    return (
      <div
        id="duality"
        css={duality}
        ref={element => (this.threeRootElement = element)}
      >
        {/* <Intro />  */}
      </div>
    )
  }
}
