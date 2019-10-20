import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../Layout"
import Socials from "../Socials"
import About from "./About"

import * as COLORS from "../../constants/colors"
import * as SIZES from "../../constants/sizes"

function normalizeAboutData(graphqlResponse) {
  console.warn({ graphqlResponse })

  const aboutData = graphqlResponse.allPrismicAbout.edges[0].node.data

  const aboutHtml = aboutData.about_page_text.html

  console.warn("normalized:", { aboutHtml })
  return aboutHtml
}

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
          allPrismicAbout {
            edges {
              node {
                data {
                  about_page_text {
                    html
                  }
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
              <About html={normalizeAboutData(data)} />
              <Socials />
            </div>
          </div>
        </Layout>
      )}
    />
  )
}

export default AboutEntry
