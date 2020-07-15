import React from "react"
import { css } from "@emotion/core"

import { Link as ScrollLink } from "react-scroll"

import * as COLORS from "../colors"

const headerContainer = isTransparent => css`
  position: fixed;
  top: 0;
  /* padding: 12px 16px; */
  padding: 0 40px;
  /* height: 100px; */
  width: 100%;

  display: flex;
  align-items: center;
  /* justify-content: center; */

  transition: background-color 0.25s ease-in;
  background: white;
  color: ${COLORS.TANG};

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

const headerLink = (fontsize) => css`
  padding: 40px;

  /* height: 100%; */
  font-size: ${fontsize}px;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const TopNav = ({ isTransparent }) => (
  <header css={headerContainer(isTransparent)}>
    {/* <div
      css={css`
        display: flex;
      `}
    > */}
    <div css={css`
        ${headerLink};
        font-size: 36px;
        font-weight: 600;
        color: ${COLORS.ROSETTE};
      `}>        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          Work
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
          info
        </ScrollLink>
      </div>
      {/* <h3 css={headerLink}>
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
        >
          contact
        </ScrollLink>
      </h3> */}
    {/* </div> */}
  </header>
)

export default TopNav
