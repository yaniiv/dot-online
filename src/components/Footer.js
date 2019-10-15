/* eslint-disable */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../colors"
import * as SIZES from "../sizes"

const FooterContainerStyles = css`
  background: ${COLORS.FOOTER_BACKGROUND};
  display: flex;
  justify-content: space-between;
  /* height: ${SIZES.HEADER_HEIGHT}; */
  right: 0;
  bottom: 0;
  height: 200px;
  width: 100vw;
`

const FooterButtonStyles = css`
  /* cursor: pointer; */
  /* padding: 1.45rem 2rem; */
`

const linkStyles = css`
  color: ${COLORS.YANIV};
  text-decoration: none;
`

const Footer = ({ siteFooter }) => (
  <footer css={FooterContainerStyles}>
    <div
      css={css`
        flex: 1;
      `}
    />
    <div
      css={css`
        flex: 3;
      `}
    />
    <div
      css={css`
        flex: 1;
      `}
    />
  </footer>
)

Footer.propTypes = {
  siteFooter: PropTypes.string,
}

Footer.defaultProps = {
  siteFooter: ``,
}

export default Footer
