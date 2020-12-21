import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import chroma from "chroma-js"

import * as COLORS from "../../colors"
import { isDesktop } from "../../utils"

function getNumSwirls() {
  let numSwirls = 12

  if (isDesktop()) {
    numSwirls = 16
  }

  return numSwirls
}

function getConicGradient(degreeOffset, coneColor) {
  return `
    conic-gradient(
      from ${degreeOffset}deg,
      ${coneColor},
      ${COLORS.TRANSPARENT}
    );
  `
}

const getSwirlDiameter = numSwirls => {
  if (typeof window === "undefined") {
    return null
  }

  const swirlDiameter = window.innerWidth / numSwirls

  if (isDesktop()) {
    return swirlDiameter * 2
  }

  return swirlDiameter * 8
}

const getSquiggleStyle = (degreeRotate, color, swirlDiameter, index) => {
  const conicGradientProperties = getConicGradient(degreeRotate, color)
  return css`
    width: ${swirlDiameter}px;
    height: ${swirlDiameter}px;
    margin-left: -${swirlDiameter / 2}px;
    border-radius: ${swirlDiameter}px;
    /* border: 1px solid ${COLORS.PURPLE}; */
    background: ${conicGradientProperties};
    display: block;
    /* overflow:hidden; */
    position: fixed;
    left: ${120 + 5 * index}px;

    /* left: 12vw;
            top: 86vh;
            @media (min-width: 768px) {
              top: 22vh;
              left: 32vw;
            } */

    ${isDesktop() &&
      css`
        left: calc(10vw + ${32 * index}px);
      `}

    animation-duration: 2s;
    animation-delay: ${index * 300}ms;
    animation-name: slidein;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes slidein {
      from {
        /* margin-top: -${swirlDiameter / 2}px; */
        margin-left: -${swirlDiameter / 2}px;
      }

      to {
        /* margin-top: -${swirlDiameter}px; */
        margin-left: -${swirlDiameter}px;
      }
    }
  `
}

const getSwirlColors = (numSwirls, colorScale) => {
  const swirlColors = chroma
    .scale(colorScale)
    .mode("lch")
    .colors(numSwirls)

  return swirlColors
}

const createSwirlStyles = ({
  numSwirls,
  swirlDiameter,
  colorScale,
  padding = "500px",
}) => {
  const swirlColors = getSwirlColors(numSwirls, colorScale)
  const rotationPerFrame = 720 / numSwirls
  return swirlColors.map((color, index) => {
    const circleRotation = -90 + index * rotationPerFrame
    const swirlStyles = getSquiggleStyle(
      circleRotation,
      color,
      swirlDiameter,
      index
    )

    return swirlStyles
  })
}

const MagicBorder = ({
  colorScale = COLORS.SMALLBALLGRADIENT,
  backgroundColor = COLORS.PURPLE,
  numSwirls = getNumSwirls(),
}) => {
  const [swirlDiameter, setSwirlDiameter] = useState(
    getSwirlDiameter(numSwirls)
  )

  const swirlStyles = createSwirlStyles({
    numSwirls,
    swirlDiameter,
    colorScale,
  })

  useEffect(() => {
    // only render swirls after

    function handleResize() {
      const swirlDiameter = getSwirlDiameter(numSwirls)
      setSwirlDiameter(swirlDiameter)
    }

    window.addEventListener("resize", handleResize, { passive: true })
  })

  return (
    <div
      css={css`
        display: flex;
        width: 400px
        margin-bottom: -${swirlDiameter / 2}px;

        /* animation-duration: 3s;
        animation-name: slideabout;
        animation-iteration-count: infinite;
        animation-direction: alternate;

        @keyframes slideabout {
          from {
            padding-left: 100px;
          }

          to {
            padding-left: 1000px;
          }
        } */
      `}
    >
      {swirlStyles.map((css, index) => (
        <div css={css} key={index} />
      ))}
    </div>
  )
}

export default MagicBorder
