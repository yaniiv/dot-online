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
  cursor: pointer;
  /* padding: 1.45rem 2rem; */
`

const linkStyles = css`
  color: ${COLORS.YANIV};
  text-decoration: none;
`

const Footer = ({ siteFooter }) => (
  <header css={FooterContainerStyles}>
    <div css={FooterButtonStyles}>
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
          {siteFooter}
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

Footer.propTypes = {
  siteFooter: PropTypes.string,
}

Footer.defaultProps = {
  siteFooter: ``,
}

export default Footer
