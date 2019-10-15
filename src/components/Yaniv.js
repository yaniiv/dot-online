/* eslint-disable */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../constants/colors"

const titleContainerStyles = css`
  background: ${COLORS.BACKGROUND};
  text-decoration: "underline";
  display: "flex";
  position: "fixed";
  right: 0;
  top: 0;
`

const titleButtonStyles = css`
  width: 100vh;
  padding: 1.45rem 2rem;
`

const linkStyles = css`
  color: ${COLORS.YANIV};
  textdecoration: none;
`

const Title = ({ siteTitle }) => (
  <header css={titleContainerStyles}>
    <div css={titleButtonStyles}>
      <h1 css={{ margin: 0 }}>
        <Link to="/" css={linkStyles}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Title.propTypes = {
  siteTitle: PropTypes.string,
}

Title.defaultProps = {
  siteTitle: ``,
}

export default Title
