import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../Layout"
import Socials from "../Socials"
import About from "./About"

import * as COLORS from "../../colors"
import * as SIZES from "../../sizes"

const pageContainer = css`
  background: ${COLORS.DARK_END_DUALITY};
  @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif;
  font-size: 22px;
  font-weight: 600px;
  height: ${SIZES.DUALITY};
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const textContainer = css`
  margin: 0 auto;
  max-width: ${SIZES.MAX_TEXT_WIDTH};
  padding: 0 16px;
  color: ${COLORS.WHITE_SOFT};
`

const normalizePrismicAbout = ({ prismicAbout: { data } }) => {
  return data.text_fields.map(({ text_field }) => text_field)
}

const AboutEntry = () => {
  return (
    <StaticQuery
      query={graphql`
        query AboutPage {
          prismicAbout {
            id
            data {
              text_fields {
                text_field
              }
            }
          }
        }
      `}
      render={data => (
        <Layout backgroundColor={COLORS.PURPLE}>
          {console.warn(data)}
          <div css={pageContainer}>
            <div css={textContainer}>
              <About textBlobs={normalizePrismicAbout(data)} />
              <Socials />
            </div>
          </div>
        </Layout>
      )}
    />
  )
}

export default AboutEntry
