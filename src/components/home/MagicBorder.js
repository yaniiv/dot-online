import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import chroma from "chroma-js"

import * as COLORS from "../../colors"
import { isDesktop } from "../../utils"

function getNumSwirls() {
  let numSwirls = 20

  if (isDesktop()) {
    numSwirls = 40
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

  const swirlDiameter = (window.innerWidth / numSwirls) * 2

  return swirlDiameter
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
    

    animation-duration: 6s;
    animation-delay: ${index * 400}ms;
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
  console.warn({ swirlColors })
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

        margin-bottom: -${swirlDiameter / 2}px;
        padding-left: 100px;

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
