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
  let swirlDiameter = 2
  if (typeof window !== `undefined`) {
    swirlDiameter = (window.innerWidth / numSwirls) * 2

    console.warn("window.innerWidth", window.innerWidth)
    console.warn("window.devicePixelRatio", window.devicePixelRatio)
  }

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

const MagicBorder = () => {
  const initialSwirlDiameter = getSwirlDiameter(numSwirls)
  const swirlColors = getSwirlColors(numSwirls)

  console.warn({ initialSwirlDiameter })
  const [isVisible, setIsVisible] = useState(false)
  const [swirlDiameter, setSwirlDiameter] = useState(initialSwirlDiameter)

  useEffect(() => {
    setIsVisible(true)

    function handleResize() {
      console.warn("handle resize effect")
      const swirlDiameter = getSwirlDiameter(numSwirls)
      setSwirlDiameter(swirlDiameter)
    }

    window.addEventListener("resize", () => {
      console.warn("resize")
      handleResize()
    })
  })

  console.warn("magic border rerender")

  console.warn({ swirlDiameter })
  console.warn({ swirlColors })
  console.warn({ isVisible })

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
          {swirlColors.map((color, index) => {
            const rotationPerFrame = 720 / numSwirls
            const circleRotation = -90 + index * rotationPerFrame

            console.warn("swirl rerender swirlDiameter", swirlDiameter)
            const swirlStyles = dynamicSquiggles(
              circleRotation,
              color,
              swirlDiameter
            )
            // console.warn("sswirlStylesn", swirlStyles)

            return <div css={swirlStyles} key={swirlStyles.name} />
          })}
        </div>
      ) : null}
    </>
  )
}

export default MagicBorder
