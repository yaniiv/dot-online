/* eslint-disable */
import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import * as COLORS from "../colors"
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

function getConicGradient(degreeOffset) {
  return `
    conic-gradient(
      from ${degreeOffset}deg,
      ${COLORS.PRIMARY_YELLOW},
      ${COLORS.BACKGROUND}
    );
  `
}

// const numSwirls = 24
const swirlDiameter = 100
const numSwirls = 24

const swirl = css`
  width: 6em;
  height: 6em;
  margin-left: -3em;
  border-radius: 3em;
  /* background: ${getConicGradient(90)}; */
`

const dynamicSquiggles = deg => {
  return css`
    width: ${swirlDiameter}px;
    height: ${swirlDiameter}px;
    margin-left: -50px;
    border-radius: 50px;
    background: transparent;
    background: ${getConicGradient(deg)};
  `
}

const zag = css`
  height: 5em;
  background: linear-gradient(-45deg, transparent 74%, #cbab00 75%),
    linear-gradient(45deg, ${COLORS.PRIMARY_GRAY} 74%, #ffd926 75%) 0 50%;
  background-repeat: repeat-x;
  background-size: 5em 5em, 5em 5em;
`

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
        {/* <FullWidthHeader siteTitle="yaniv" /> */}
        <Duality />
        <div
          css={css`
            display: flex;
            background: ${COLORS.BACKGROUND};
          `}
        >
          <div css={swirl} />
          {Array(numSwirls)
            .fill("array-filler-vals")
            .map((item, index) => {
              console.warn("hi")
              const degreeRotationPerFrame = 90 + index * 15

              return (
                <div
                  css={dynamicSquiggles(degreeRotationPerFrame)}
                  key={index}
                />
              )
            })}
          {/* <div css={dynamicSquiggles} />
          <div css={dynamicSquiggles} />
          <div css={dynamicSquiggles} />
          <div css={dynamicSquiggles} /> */}
        </div>
        <div css={zig} />
        <div css={zag} />
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
