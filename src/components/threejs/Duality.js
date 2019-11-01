import React, { Component } from "react"
import { css } from "@emotion/core"

import ThreeEntryPointManager from "./ThreeEntryPointManager"

import "./duality.css"

const duality = css`
  margin: auto;
  height: 100vh;
  width: 100%;
`

export default class Duality extends Component {
  // passes the mounted div through
  componentDidMount() {
    console.warn("component mount")
    const ThreeEntryPoint = new ThreeEntryPointManager()
    ThreeEntryPoint.initialize(this.threeRootElement)
  }

  render() {
    return (
      <div css={duality} ref={element => (this.threeRootElement = element)} />
    )
  }
}
