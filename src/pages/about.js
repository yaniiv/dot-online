/* eslint-disable */
// import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import * as COLORS from "../constants/colors"
import * as SIZES from "../constants/sizes"

const hello = css`
  a {
    text-decoration: none;
  }
  a,
  a:visited {
    color: ${COLORS.YANIV};
  }
  &:hover {
    /* text-decoration: underline; */
  }
`

const pageContainer = css`
  background: ${COLORS.DARK_END_DUALITY};
  @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif;
  font-size: 22px;
  /* color: whitesmoke; */
  font-weight: 600px;
  width: 100vw;
  padding-top: ${SIZES.HEADER_HEIGHT};
`

const textContainer = css`
  /* border: 4px solid black; */
  /* border-radius: 4px; */
  /* background: ${COLORS.WHITE_SOFT}; */
  margin: 0 auto;
  height: 80vh;
  /* max-width: 600px; */
  padding: 8px;
  color: ${COLORS.WHITE_SOFT};
`

const Hello = () => (
  <div css={hello}>
    <div
      css={css`
        max-width: 600px;
        margin: auto;
        padding-top: ${SIZES.HEADER_HEIGHT};
      `}
    >
      <h2>
        Hello, i'm{" "}
        <Link to="/">
          <span
            css={css`
              color: ${COLORS.DARK_END_DUALITY};
              text-decoration: underline;
              text-decoration-color: ${COLORS.YANIV};

              &:hover {
                color: ${COLORS.YANIV};
              }
            `}
          >
            yaniv
          </span>
        </Link>
      </h2>
      <div>
        This site is a collection of some of the projects I've worked on. I try
        to make all my code <a href="">open source</a>. Info about my corporate
        work is available <a href="">over here</a>.
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
        building modern web applications for small and medium businesses. You
        can check out my <a href="">linkedin</a> for more information. <br />
        <br />
        I've also built portfolio sites for clients, and worked on some passion
        projects you can see above.
      </div>
    </div>
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
            <div
              css={css`
                /* height: 100vh; */
              `}
            />
            {/* <Yaniv siteTitle={data.site.siteMetadata.title} /> */}
            {/* <About /> */}
            {/* <Socials siteSocials={data.site.siteMetadata.siteSocials} /> */}
            <div css={textContainer}>
              <Hello />
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
