/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

// import Header from "../components/Header"
import SEO from "../components/Seo"
import Footer from "../components/Footer"

import "../normalize.css"
import "./layout.css"

const layoutStyles = css`
  margin: 0 auto;
`

const Layout = ({ children, headerBackground }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
      <div css={layoutStyles}>
        <SEO title="Home" keywords={[`yaniv`, `goldobin`]} />
        <main>{children}</main>
        <Footer />
        {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
