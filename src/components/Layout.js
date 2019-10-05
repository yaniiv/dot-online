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

import FullWidthHeader from "../components/FullWidthHeader"
import SEO from "../components/Seo"

import "./layout.css"
const layoutStyles = css`
  margin: 0 auto;
`

const Layout = ({ children }) => (
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
        <FullWidthHeader siteTitle="yaniv" />
        <main>{children}</main>
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
