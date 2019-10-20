/* eslint-disable */
import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../constants/colors"
import * as SIZES from "../constants/sizes"

const headerContainerStyles = css`
  background: transparent;
  display: flex;
  position: fixed;
  justify-content: space-between;
  /* height: ${SIZES.HEADER_HEIGHT}; */
  right: 0;
  top: 0;
  width: 100vw;

  padding: 1.5rem 1.5rem;

@media (min-width: 768px) {
  padding: 2.5rem 2rem;
}
`

const headerLinkStyles = css`
  h2 {
    margin: 0;
    cursor: pointer;

    a {
      padding: 1.5rem 1.5rem;

      @media (min-width: 768px) {
        padding: 2.5rem 2rem;
      }
    }

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

const Header = () => (
  <header css={headerContainerStyles}>
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
