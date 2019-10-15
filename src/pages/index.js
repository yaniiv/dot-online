/* eslint-disable */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import chroma from "chroma-js"

import * as COLORS from "../constants/colors"

import Layout from "../components/Layout"
import Duality from "../components/threejs/Duality"

const contactFormContainer = css`
  height: 100vh;
  background: ${COLORS.CONTACT_FORM_BACKGROUND};
`

const zig = css`
  height: 5em;
  background: linear-gradient(45deg, transparent 50%, ${COLORS.BACKGROUND} 50%),
    linear-gradient(90deg, transparent 50%, #ffd926 50%),
    linear-gradient(135deg, ${COLORS.BACKGROUND} 50%, #cbab00 50%), 0 50%;
  background-repeat: repeat-x;
  background-size: 5em 5em, 5em 5em;
`

function getConicGradient(degreeOffset, coneColor) {
  return `
    conic-gradient(
      from ${degreeOffset}deg,
      ${coneColor},
      ${COLORS.TRANSPARENT}
    );
  `
}

// const numSwirls = 24
const numSwirls = 18
// const swirlDiameter = 90 // (px)
const swirlDiameter = (window.innerWidth / numSwirls) * 2
console.warn({ swirlDiameter })
// const swirlDiameter = window.innerWidth / numSwirls

const swirl = css`
  width:${swirlDiameter}px;
  height: ${swirlDiameter}px;
  margin-left: -${swirlDiameter / 2}px;
    border-radius: ${swirlDiameter / 2}px;
  /* background: ${getConicGradient(90)}; */
`

const dynamicSquiggles = (degreeRotate, color) => {
  return css`
    width: ${swirlDiameter}px;
    height: ${swirlDiameter}px;
    margin-left: -${swirlDiameter / 2}px;
    border-radius: ${swirlDiameter / 2}px;
    background: ${getConicGradient(degreeRotate, color)};
  `
}

const zag = css`
  height: 5em;
  background: linear-gradient(-45deg, transparent 74%, #cbab00 75%),
    linear-gradient(45deg, ${COLORS.PRIMARY_GRAY} 74%, #ffd926 75%) 0 50%;
  background-repeat: repeat-x;
  background-size: 5em 5em, 5em 5em;
`

const colors = chroma
  .scale(COLORS.SMALLBALLGRADIENT)
  .mode("lch")
  .colors(numSwirls)

console.warn({ colors })

const MinimalPage = () => (
  <StaticQuery
    query={graphql`
      query MinimalPageQuery {
        site {
          siteMetadata {
            title
            siteSocials {
              name
              linkTo
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        {/* <SEO title="Page two" /> */}
        {/* <div css={headerBlock} /> */}
        {/* <div css={zog} /> */}
        {/* <Yaniv siteTitle={data.site.siteMetadata.title} /> */}
        {/* <Header siteTitle="yaniv" /> */}
        <Duality />
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
              console.warn("frame rotationPerFrame", rotationPerFrame)
              const circleRotation = -90 + index * rotationPerFrame
              console.warn("circleRotation", circleRotation)

              return (
                <div
                  css={dynamicSquiggles(circleRotation, color)}
                  key={index}
                />
              )
            })}
          </div>

          {/* <div css={dynamicSquiggles} />
          <div css={dynamicSquiggles} />
          <div css={dynamicSquiggles} />
          <div css={dynamicSquiggles} /> */}
        </div>
        {/* <div css={zig} />
        <div css={zag} /> */}
        <div css={contactFormContainer} />
        {/* <SEO title="Home" keywords={[`yaniv`, `goldobin`]} /> */}
        {/* <Projects /> */}
        {/* <About /> */}
        {/* <Socials siteSocials={data.site.siteMetadata.siteSocials} /> */}
        {/* <Link to="/minimal/">Go to page 2</Link> */}
        {/* <Link to="/">Go back to the homepage</Link> */}
      </Layout>
    )}
  />
)

export default MinimalPage
