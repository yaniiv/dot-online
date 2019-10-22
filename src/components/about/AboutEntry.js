import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../Layout"
import Socials from "../Socials"
import About from "./About"

import * as COLORS from "../../constants/colors"
import * as SIZES from "../../constants/sizes"

const pageContainer = css`
  background: ${COLORS.DARK_END_DUALITY};
  @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif;
  font-size: 22px;
  font-weight: 600px;
  height: 100vh;
  width: 100vw;
  padding-top: ${SIZES.HEADER_HEIGHT};
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

const AboutEntry = () => {
  return (
    <StaticQuery
      query={graphql`
        query AboutPage {
          prismicAbout {
            id
            data {
              about_page_text {
                html
                text
                raw {
                  type
                  text
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <div css={pageContainer}>
            <div css={textContainer}>
              <About prismicAbout={data.prismicAbout} />
              <Socials />
            </div>
          </div>
        </Layout>
      )}
    />
  )
}

export default AboutEntry
