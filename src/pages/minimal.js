import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import Header from "../components/threejs/Header"
import SEO from "../components/Seo"
import Yaniv from "../components/Yaniv"
import Socials from "../components/Socials"
import About from "../components/About"

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

// const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
//   <div className="form-check">
//     <label>
//       <input
//         type="checkbox"
//         name={label}
//         checked={isSelected}
//         onChange={onCheckboxChange}
//         className="form-check-input"
//       />
//       {label}
//     </label>
//   </div>
// )

const Hello = () => (
  <div css={css``}>
    <div css={css``}>
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
  margin-top: 200px;
  display: flex;
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
        <Header />
        {/* <SEO title="Home" keywords={[`yaniv`, `goldobin`]} /> */}
        <Yaniv siteTitle={data.site.siteMetadata.title} />
        <About />
        {/* <Socials siteSocials={data.site.siteMetadata.siteSocials} /> */}
        <div css={bloxContainer}>
          <div
            css={css`
              flex: 5;
            `}
          >
            <Hello />
            <ProjectSocials />
            <Coding />
          </div>
        </div>
        {/* <Link to="/minimal/">Go to page 2</Link> */}
        {/* <Link to="/">Go back to the homepage</Link> */}
      </Layout>
    )}
  />
)

export default MinimalPage
