import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import chroma from "chroma-js"

import * as COLORS from "../colors"
import isDesktop from "../utils"

function getNumSwirls() {
  let numSwirls = 18

  if (isDesktop()) {
    numSwirls = 50
  }

  return numSwirls
}

const numSwirls = getNumSwirls()

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

const getSquiggleStyle = (degreeRotate, color, swirlDiameter) => {
  const conicGradientProperties = getConicGradient(degreeRotate, color)

  return css`
    width: ${swirlDiameter}px;
    height: ${swirlDiameter}px;
    margin-left: -${swirlDiameter / 2}px;
    border-radius: ${swirlDiameter / 2}px;
    background: ${conicGradientProperties};
  `
}

const getSwirlColors = (numSwirls, colorScale) => {
  const swirlColors = chroma
    .scale(colorScale)
    .mode("lch")
    .colors(numSwirls)

  return swirlColors
}

const createSwirlStyles = ({ numSwirls, swirlDiameter, colorScale }) => {
  const swirlColors = getSwirlColors(numSwirls, colorScale)
  const rotationPerFrame = 720 / numSwirls

  return swirlColors.map((color, index) => {
    const circleRotation = -90 + index * rotationPerFrame
    const swirlStyles = getSquiggleStyle(circleRotation, color, swirlDiameter)

    return swirlStyles
  })
}

const MagicBorder = ({
  colorScale = COLORS.SMALLBALLGRADIENT,
  backgroundColor = COLORS.PURPLE,
}) => {
  const [isVisible, setIsVisible] = useState(false)
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
    setIsVisible(true)

    function handleResize() {
      const swirlDiameter = getSwirlDiameter(numSwirls)
      setSwirlDiameter(swirlDiameter)
    }

    window.addEventListener("resize", handleResize)
  })

  return (
    <>
      {isVisible ? (
        <div
          css={css`
            display: flex;
            background: ${backgroundColor};
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
