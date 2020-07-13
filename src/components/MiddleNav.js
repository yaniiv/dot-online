import React from "react"
import { css } from "@emotion/core"

import { Link as ScrollLink } from "react-scroll"

import * as COLORS from "../colors"

const headerContainer = css`
  position: sticky;
  /* left: 50%; */
  /* margin-left: -50%; */
  /* margin-right: -50%; */
  top: 50%;
  margin: 20px 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background: ${COLORS.TRANSPARENT};
  color: ${COLORS.YANIV};
  z-index: 5;
  text-align: right;
  /* font-size: 20px; */

  @media (min-width: 768px) {
    margin: 32px 40px;
    font-size: 22px;
  }
`

const headerLink = css`
  margin: 4px 0;
  @media (min-width: 768px) {
    margin: 8px 0;
  }
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  .active {
    font-size: 22px;
    font-weight: 600;
    @media (min-width: 768px) {
      font-size: 26px;
      font-weight: 600;
    }
  }
`

const MiddleNav = ({ isTransparent }) => (
  <header css={headerContainer}>
    <div css={headerLink}>
      <ScrollLink
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={300}
      >
    o---software----o     
      </ScrollLink>
    </div>
    <div css={headerLink}>
      <ScrollLink
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={300}
      >
        ----projects----o   
      </ScrollLink>
    </div>
    <div css={headerLink}>
      <ScrollLink
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        ----whatever----o     
      </ScrollLink>
    </div>
  </header>
)

export default MiddleNav
