/* eslint-disable */
import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

import * as COLORS from "../colors"
import * as SIZES from "../sizes"

const headerContainerStyles = backgroundColor => css`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${COLORS.TRANSPARENT};
`

const headerLinkContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 20px 30px;

  font-size: 22px;
  text-align: right;

  color: ${COLORS.YANIV};
`

const headerLink = css`
  margin: 4px 0;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const SideNav = ({ color }) => (
  <header css={headerContainerStyles(color)}>
    <div css={headerLinkContainer}>
      <div css={headerLink}>
        <ScrollLink
          activeClass="active"
          to="duality"
          spy={true}
          smooth={true}
          duration={500}
        >
          yaniv
        </ScrollLink>
      </div>
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

export default SideNav
