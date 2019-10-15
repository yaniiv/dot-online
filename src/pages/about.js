/* eslint-disable */
// import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import * as COLORS from "../colors"
import * as SIZES from "../sizes"

const subHeader = css``

const hello = css`
  a {
    text-decoration: none;
  }
  a,
  a:visited {
    color: ${COLORS.DARK_END_DUALITY};
  }
  &:hover {
    /* text-decoration: underline; */
  }
`

const pageContainer = css`
  background: ${COLORS.GREY};
  @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif;
  font-size: 22px;
  /* color: whitesmoke; */
  font-weight: 600px;
  width: 100vw;
  height: 100vh;
  padding-top: ${SIZES.HEADER_HEIGHT};
`

const textContainer = css`
  /* border: 4px solid black; */
  /* border-radius: 4px; */
  background: ${COLORS.WHITE_SOFT};
  margin: 0 auto;
  max-width: 600px;
  margin-top: ${SIZES.HEADER_HEIGHT};
  padding: 8px;
  color: ${COLORS.GREY_DARK};
`

const Hello = () => (
  <div css={hello}>
    <h2 css={subHeader}>Hello! I'm Yaniv</h2>
    <div>
      This site is a collection of some of the projects I've worked on. I try to
      make all my code <a href="">open source</a>. Info about my corporate work
      is available <a href="">over here</a>.
    </div>
    <div
      css={css`
        margin-top: 30px;
      `}
    >
      Code
    </div>
    <div>
      Sho do! I write mostly Javascript, and have several years of experience
      building modern web applications for small and medium businesses. You can
      check out my <a href="">linkedin</a> for more information. <br />
      <br />
      I've also built portfolio sites for clients, and worked on some passion
      projects you can see above.
    </div>
  </div>
)

const Coding = () => (
  <div
    css={css`
      margin-top: 30px;
    `}
  >
    <div css={css``} />
  </div>
)

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query AboutPageQuery {
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
          <div css={pageContainer}>
            {/* <Yaniv siteTitle={data.site.siteMetadata.title} /> */}
            {/* <About /> */}
            {/* <Socials siteSocials={data.site.siteMetadata.siteSocials} /> */}
            <div css={textContainer}>
              <Hello />
              <Coding />
            </div>
          </div>
        </Layout>
      )}
    />
  )
}

About.propTypes = {}

About.defaultProps = {}

export default About
