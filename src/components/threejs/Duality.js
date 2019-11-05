import React, { Component } from "react"
import { css } from "@emotion/core"

import ThreeEntryPointManager from "./ThreeEntryPointManager"

const duality = css`
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
    console.warn(
      "Duality componentDidUpdate this.props.pauseRender",
      this.props.pauseRender
    )
    if (this.props.pauseRender) {
      this.ThreeEntryPoint.pause()
    } else {
      this.ThreeEntryPoint.resume()
    }
  }

  render() {
    return (
      <div
        id="duality"
        css={duality}
        ref={element => (this.threeRootElement = element)}
      />
    )
  }
}
