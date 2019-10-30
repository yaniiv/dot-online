import React, { Component } from "react"
import { css } from "@emotion/core"

import ThreeEntryPointManager from "./ThreeEntryPointManager"
import * as SIZES from "../../constants/sizes"
import "./duality.css"

const duality = css`
  margin: auto;
  height: ${SIZES.DUALITY};
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
