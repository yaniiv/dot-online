import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import SEO from "../components/Seo"
import Footer from "../components/Footer"

import * as COLORS from "../colors"

import "../normalize.css"
import "./layout.css"

const layoutStyles = backgroundColor => css`
  background: ${backgroundColor};
  margin: 0 auto;
`

const Layout = ({ children, backgroundColor }) => (
  <div css={layoutStyles(backgroundColor)}>
    <SEO title="Home" keywords={[`yaniv`, `goldobin`]} />
    <main>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
}

Layout.defaultProps = {
  backgroundColor: COLORS.PURPLE,
}

export default Layout
