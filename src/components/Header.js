/* eslint-disable */
import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../constants/colors"
import * as SIZES from "../constants/sizes"

const headerContainerStyles = ({ height }) => css`
  background: transparent;
  display: flex;
  /* position: fixed; */
  justify-content: space-between;
  height: ${SIZES.INDEX_HEADER_HEIGHT};
  position: sticky;
  top: 0;
  width: 100vw;
`

const headerLinkStyles = css`
  h2 {
    margin: 0;
    cursor: pointer;
    padding: 1.5rem 2rem;

    &:hover {
      a {
        text-decoration: underline;
      }
    }
  }

  a {
    color: ${COLORS.YANIV};
    text-decoration: none;
  }
`

const Header = ({ height }) => (
  <header css={headerContainerStyles({ height })}>
    <div css={headerLinkStyles}>
      <h2>
        <Link to="/">yaniv</Link>
      </h2>
    </div>
    <div
      css={css`
        display: flex;
        ${headerLinkStyles}
      `}
    >
      <h2>
        <Link to="/projects">projects</Link>
      </h2>
      <h2>
        <Link to="/about">about</Link>
      </h2>
    </div>
  </header>
)

export default Header
