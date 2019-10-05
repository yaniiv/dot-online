/* eslint-disable */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../colors"
import * as SIZES from "../sizes"

const titleContainerStyles = css`
  background: 'transparent';
  display: flex;
  position: fixed;
  justify-content: space-between;
  /* height: ${SIZES.HEADER_HEIGHT}; */
  right: 0;
  top: 0;
  width: 100vw;
`

const titleButtonStyles = css`
  padding: 1.45rem 2rem;
`

const linkStyles = css`
  color: ${COLORS.YANIV};
  text-decoration: none;
`

const Title = ({ siteTitle }) => (
  <header css={titleContainerStyles}>
    <div css={titleButtonStyles}>
      <h1 css={{ margin: 0 }}>
        <Link css={{ textDecoration: "underline", color: COLORS.YANIV }} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div css={titleButtonStyles}>
      <h1 css={{ margin: 0 }}>
        <Link css={linkStyles} to="/projects">
          projects
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
