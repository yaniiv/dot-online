import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import SEO from "../components/Seo"

import * as COLORS from "../colors"

import "../normalize.css"
import "./layout.css"

const layoutStyles = (backgroundColor) => css`
  margin: auto;
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${COLORS.PURPLE};
  overflow-y: scroll;
  display: flex;
  margin: 0 auto;
`

const Layout = ({ children, backgroundColor }) => (
  <div css={layoutStyles()}>
    <SEO title="Home" lang="en" keywords={[`yaniv`, `goldobin`]} />
    <main>{children}</main>
    {/* <Footer /> */}
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
