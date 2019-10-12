/* eslint-disable */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../colors"
import * as SIZES from "../sizes"

const titleContainerStyles = css`
  background: transparent;
  display: flex;
  position: fixed;
  justify-content: space-between;
  /* height: ${SIZES.HEADER_HEIGHT}; */
  right: 0;
  top: 0;
  width: 100vw;
`

const titleButtonStyles = css`
  cursor: pointer;
  /* padding: 1.45rem 2rem; */
`

const linkStyles = css`
  color: ${COLORS.YANIV};
  text-decoration: none;
`

const Title = ({ siteTitle }) => (
  <header css={titleContainerStyles}>
    <div css={titleButtonStyles}>
      <h2
        css={css`
          margin: 0;
          padding: 1.45rem 2rem;

          &:hover {
            a {
              text-decoration: underline;
            }
          }
        `}
      >
        <Link css={linkStyles} to="/">
          {siteTitle}
        </Link>
      </h2>
    </div>
    <div
      css={css`
        display: flex;
        cursor: pointer;
      `}
    >
      <h2
        css={css`
          margin: 0;
          padding: 1.5rem 1rem;

          &:hover {
            a {
              text-decoration: underline;
            }
          }
        `}
      >
        <Link css={linkStyles} to="/projects">
          projects
        </Link>
      </h2>
      <h2
        css={css`
          margin: 0;
          padding: 1.5rem 2rem;

          &:hover {
            a {
              text-decoration: underline;
            }
          }
        `}
      >
        <Link css={linkStyles} to="/about">
          about
        </Link>
      </h2>
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
