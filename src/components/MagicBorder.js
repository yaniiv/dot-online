/* eslint-disable */
import React, { Component } from "react"
import { css } from "@emotion/core"
import chroma from "chroma-js"

import * as COLORS from "../constants/colors"

function getConicGradient(degreeOffset, coneColor) {
  return `
    conic-gradient(
      from ${degreeOffset}deg,
      ${coneColor},
      ${COLORS.TRANSPARENT}
    );
  `
}

// const swirlDiameter = window.innerWidth / numSwirls

console.warn({ colors })

class MagicBorder extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.warn("hi  mounting up")
  }

  render() {
    // const numSwirls = 24
    const numSwirls = 18
    // const swirlDiameter = 90 // (px)
    let swirlDiameter = 2
    if (typeof window !== `undefined`) {
      console.warn("window.innerWidth", window.innerWidth)
      console.warn("window.devicePixelRatio", window.devicePixelRatio)

      swirlDiameter = (window.innerWidth / numSwirls) * 2
    }
    console.warn({ swirlDiameter })

    const dynamicSquiggles = (degreeRotate, color) => {
      return css`
        width: ${swirlDiameter}px;
        height: ${swirlDiameter}px;
        margin-left: -${swirlDiameter / 2}px;
        border-radius: ${swirlDiameter / 2}px;
        background: ${getConicGradient(degreeRotate, color)};
      `
    }

    const colors = chroma
      .scale(COLORS.SMALLBALLGRADIENT)
      .mode("lch")
      .colors(numSwirls)

    return (
      <div
        css={css`
          display: flex;
          background: ${COLORS.BACKGROUND};
          margin-bottom: -${swirlDiameter / 2}px;
        `}
      >
        <div css={swirl} />
        <div
          css={css`
            display: flex;
            flex: 1;
          `}
        >
          {colors.map((color, index) => {
            const rotationPerFrame = 720 / numSwirls
            const circleRotation = -90 + index * rotationPerFrame

            console.warn("circleRotation", circleRotation)

            return (
              <div css={dynamicSquiggles(circleRotation, color)} key={index} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default MagicBorder
