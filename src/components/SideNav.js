import React from "react"
import { css } from "@emotion/core"

import { Link as ScrollLink } from "react-scroll"

import * as COLORS from "../colors"

const headerContainer = css`
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${COLORS.TRANSPARENT};
  color: ${COLORS.YANIV};

  text-align: right;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const headerLink = css`
  margin: 4px 0;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const SideNav = () => (
  <header css={headerContainer}>
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
  </header>
)

export default SideNav
