import React from "react"
import { css } from "@emotion/core"

import { Link as ScrollLink } from "react-scroll"

import * as COLORS from "../colors"

const headerContainer = css`
  position: fixed;
  right: 0;
  top: 0;
  margin: 20px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${COLORS.TRANSPARENT};
  color: ${COLORS.YANIV};
  z-index: 5;
  text-align: right;
  font-size: 20px;

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

const SideNav = ({ isTransparent }) => (
  <header css={headerContainer}>
    <div css={headerLink}>
      <ScrollLink
        activeClass="active"
        to="duality"
        spy={true}
        smooth={true}
        duration={300}
      >
        {/* {!isTransparent && (
          <span>
            {"👋 "}
            <span
              css={css`
                color: white;
              `}
            >
              i'm
            </span>{" "}
            <span />
          </span>
        )} */}
        hello
      </ScrollLink>
    </div>
    <div css={headerLink}>
      <ScrollLink
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={300}
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
        duration={300}
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
        duration={500}
      >
        contact
      </ScrollLink>
    </div>
  </header>
)

export default SideNav
