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

function getLinearGradient(degreeOffset, coneColor) {
  return `
    linear-gradient(25deg, transparent 50%, ${
      COLORS.PURPLE
    } 50%), linear-gradient(90deg, transparent 50%, ${coneColor} 50%), linear-gradient(135deg, ${
    COLORS.PURPLE
  } 50%, #cbab00 50%), 0 50%
  `
}

const getSwirlDiameter = numSwirls => {
  if (typeof window === "undefined") {
    return null
  }

  const swirlDiameter = (window.innerWidth / numSwirls) * 2

  return swirlDiameter
}

// numswirls = 40
const getSquiggleStyle = (degreeRotate, color, swirlDiameter, index) => {
  const conicGradientProperties = getConicGradient(degreeRotate, color)
  console.log("-${swirlDiameter / 2}px;", `-${swirlDiameter / 2}px`)
  return css`
    width: ${swirlDiameter}px;
    height: ${swirlDiameter}px;
    margin-left: -${swirlDiameter / 2}px;
    border-radius: ${swirlDiameter / 2}px;
    /* border: 1px solid ${COLORS.PURPLE}; */
    background: ${conicGradientProperties};
    /* transition: background ease-in; */
    /* background-color: white; */
    /* transition-delay: 2s; */
    

    animation-duration: 6s;
    animation-delay: ${index * 250}ms;
    /* animation-delay: ${index * 500}ms; */
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

const createSwirlStyles = ({ numSwirls, swirlDiameter, colorScale }) => {
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
  colorScale = COLORS.SQUIGGLEGRADIENT,
  backgroundColor = COLORS.PURPLE,
  numSwirls = getNumSwirls(),
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

    window.addEventListener("resize", handleResize, { passive: true })
  })

  return (
    <>
      {isVisible ? (
        <div
          css={css`
            display: flex;
            width: 100vw;
            margin-bottom: -${swirlDiameter / 2}px;

            animation-duration: 20s;
            animation-name: slideabout;
            animation-iteration-count: infinite;
            animation-direction: alternate;

            @keyframes slideabout {
              from {
                padding-left: 0px;
              }

              to {
                padding-left: 30vw;
              }
            }
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
