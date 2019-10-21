import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "../components/Header"
import SEO from "../components/Seo"
import Footer from "../components/Footer"

import "../normalize.css"
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
        <Header siteTitle="yaniv" />
        <main>{children}</main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
