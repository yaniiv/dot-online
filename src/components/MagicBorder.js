/* eslint-disable */
import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import chroma from "chroma-js"

import * as COLORS from "../constants/colors"

const numSwirls = 18

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
  // let swirlDiameter = 2
  const swirlDiameter = (window.innerWidth / numSwirls) * 2

  return swirlDiameter
}

const getSwirlColors = numSwirls => {
  const swirlColors = chroma
    .scale(COLORS.SMALLBALLGRADIENT)
    .mode("lch")
    .colors(numSwirls)

  return swirlColors
}

const dynamicSquiggles = (degreeRotate, color, swirlDiameter) => {
  console.warn("dynamic squiggle swirlDiameter", swirlDiameter)
  const conicGradientProperties = getConicGradient(degreeRotate, color)

  return css`
    width: ${swirlDiameter}px;
    height: ${swirlDiameter}px;
    margin-left: -${swirlDiameter / 2}px;
    border-radius: ${swirlDiameter / 2}px;
    background: ${conicGradientProperties};
  `
}

const createSwirlStyles = (numSwirls, swirlDiameter) => {
  const swirlColors = getSwirlColors(numSwirls)
  const rotationPerFrame = 720 / numSwirls

  return swirlColors.map((color, index) => {
    const circleRotation = -90 + index * rotationPerFrame
    const swirlStyles = dynamicSquiggles(circleRotation, color, swirlDiameter)

    return swirlStyles
  })
}

const MagicBorder = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [swirlDiameter, setSwirlDiameter] = useState(2)

  useEffect(() => {
    // only render swirls after component mounts
    setIsVisible(true)

    function handleResize() {
      const swirlDiameter = getSwirlDiameter(numSwirls)
      setSwirlDiameter(swirlDiameter)
    }

    window.addEventListener("resize", handleResize)
  })

  // console.warn({ swirlDiameter })
  // console.warn({ swirlColors })
  // console.warn({ isVisible })
  const swirlStyles = createSwirlStyles(numSwirls, swirlDiameter)

  return (
    <>
      {isVisible ? (
        <div
          css={css`
            display: flex;
            background: ${COLORS.BACKGROUND};
            margin-bottom: -${swirlDiameter / 2}px;
          `}
        >
          {swirlStyles.map((css, index) => (
            <div css={css} key={index} />
          ))}
        </div>
      ) : null}
    </>
  )
}

export default MagicBorder
