// import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import * as COLORS from "../colors"
import * as SIZES from "../sizes"

const linkStyle = css`
  text-transform: lowercase;
  text-decoration-line: underline;
  width: 100%;
  /* padding-bottom: 1px; */
  /* border-bottom: 1px solid #0000ee; */
`

const headerStyle = css`
  font-weight: bold;
`

const infoIconStyle = css`
  width: 40px;
  height: 40px;
  z-index: 30;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

const fullPageOverlayStyles = css`
  background-color: lightgoldenrodyellow;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const aboutTextStyles = css`
  min-width: 375px;
  max-width: 750px;
  margin: 0 auto;
  font-family: Lucida Grande;
  padding: 40px;

  > div {
    margin: 12px 0;
  }
`

const Hello = () => (
  <div>
    <div>
      <div css={headerStyle}>x red / y green / z blue</div>
      <div>
        My name is Yan, and this site is a place where you can learn a bit more
        about me. I'm passionate about human connection, self expression, and
        how technology can be used to reinforce the two.
      </div>
    </div>
  </div>
)

const Coding = () => (
  <div
    css={css`
      margin-top: 30px;
    `}
  >
    <div css={css``}>
      <div css={headerStyle}>Code</div>
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

const ProjectSocials = () => (
  <div css={css``}>
    <div
      css={css`
        margin-top: 30px;
        display: flex;
        flex-basis: 100%;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div css={headerStyle}>Projects</div>
        <a css={linkStyle} href="google.com">
          after the ussr
        </a>
        <a css={linkStyle} href="google.com">
          scott perry site
        </a>
        <a css={linkStyle} href="google.com">
          I am developer portfolio
        </a>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          text-align: right;
        `}
      >
        <div css={headerStyle}>Socials</div>
        <a css={linkStyle} href="google.com">
          Medium
        </a>
        <a css={linkStyle} href="google.com">
          Twitter
        </a>
        <a css={linkStyle} href="google.com">
          Github
        </a>
      </div>
    </div>
  </div>
)

const bloxContainer = css`
  @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif;
  margin: 0 auto;
  max-width: 600px;
  margin-top: ${SIZES.HEADER_HEIGHT};
`

const pageContainer = css`
  background: ${COLORS.ABOUT_PAGE_BACKGROUND};
  width: 100vw;
  height: 100vh;
`

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
            {/* <div css={fullPageOverlayStyles}>
            <div css={aboutTextStyles}>
              <div>
                Hello, i'm Yaniv. I'm a software engineer in Los Angeles,
                California.
              </div>
              <div>This site is a collection of some of my projects.</div>
              <div>
                I'm particularly interested in working with technologies that
                will help me tell compelling stories with javascript.
              </div>
              <div className="proffesional">
                For my professional work, you can check out{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/ygoldobin"
                >
                  linkedin
                </a>
                .
              </div>
              <div>To get in touch you can email "xxx@email.com"</div>
            </div>
          </div> */}
            <div css={bloxContainer}>
              <Hello />
              <ProjectSocials />
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
