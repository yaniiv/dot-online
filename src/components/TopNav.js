import React from "react"
import { css } from "@emotion/core"

import { Link as ScrollLink } from "react-scroll"

import * as COLORS from "../colors"

const headerContainer = (isTransparent) => css`
  position: sticky;
  top: 0;
  padding: 12px 16px;

  display: flex;
  justify-content: space-between;

  transition: background-color 0.25s ease-in;
  background: ${COLORS.PURPLE_DARK};
  color: ${COLORS.YANIV};

  text-align: right;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 22px;
  }

  ${isTransparent &&
  css`
    transition: background-color 0.25s ease-in;
    background-color: ${COLORS.TRANSPARENT};
  `}
`

const headerLink = css`
  padding: 8px 16px;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const TopNav = ({ isTransparent }) => (
  <header css={headerContainer(isTransparent)}>
    <div>
      <div
        css={css`
          color: white;
          ${headerLink};
        `}
      >
        <ScrollLink
          activeClass="active"
          to="duality"
          spy={true}
          smooth={true}
          duration={500}
        >
          {`👋 `}
          <span
            css={css`
              @media (max-width: 768px) {
                display: none;
              }
            `}
          >
            Hello! I'm Yaniv
          </span>
        </ScrollLink>
      </div>
    </div>
    <div
      css={css`
        display: flex;
      `}
    >
      <div css={headerLink}>
        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          about
        </ScrollLink>
      </div>
      <div css={headerLink}>
        <ScrollLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
        >
          projects
        </ScrollLink>
      </div>
      <div css={headerLink}>
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
        >
          contact
        </ScrollLink>
      </div>
    </div>
  </header>
)

export default TopNav
