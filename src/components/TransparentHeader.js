/* eslint-disable */
import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../colors"
import * as SIZES from "../sizes"

const headerContainerStyles = backgroundColor => css`
  display: flex;
  position: absolute;
  background: transparent;
  justify-content: space-between;
  height: ${SIZES.HEADER_HEIGHT_MOBILE};
  right: 0;
  top: 0;
  width: 100vw;

  padding: 1.5rem 1.5rem;
  text-shadow: 12px 12px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    height: ${SIZES.HEADER_HEIGHT_DESKTOP};
    padding: 0 2rem;
  }
`

const headerLinkStyles = css`
  display: flex;

  h2 {
    margin: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      padding: 1.5rem 1rem;
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

const Header = ({ color }) => (
  <header css={headerContainerStyles()}>
    <div css={headerLinkStyles}>
      <h2>
        <Link to="/">yaniv</Link>
      </h2>
    </div>
    <div css={headerLinkStyles}>
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
