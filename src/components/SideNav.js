/* eslint-disable */
import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

import * as COLORS from "../colors"
import * as SIZES from "../sizes"

const headerContainerStyles = backgroundColor => css`
  background: ${backgroundColor};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  width: 140px;

  right: 0;
  top: 0;

  /* writing-mode: vertical-rl; */
  /* padding: 1.5rem 1.5rem; */

  @media (min-width: 768px) {
    /* padding: 0 2rem; */
  }
`

const headerLinkStyles = css`
  /* @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif; */
  font-size: 20px;
  display: flex;
  color: ${COLORS.YANIV};
  flex-direction: column;
  text-align: right;

  div {
    margin: 0;
    cursor: pointer;
    justify-content: center;

    padding: 0.12rem 1rem;
    @media (min-width: 768px) {
      /* padding: 2.5rem 2rem; */
    }

    &:hover {
      text-decoration: underline;
    }
  }

  a {
    text-decoration: none;
    /* 
    padding: 1.5rem 1rem;
    @media (min-width: 768px) {
      padding: 2.5rem 2rem;
    } */

    &:visited {
      color: ${COLORS.YANIV};
      text-decoration: none;
    }
  }
`

const Circle = ({ size = 24, color = COLORS.YELLOW, fill = "none" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    css={css`
      vertical-align: middle;
      stroke-width: 2;
      height: ${size}px;
      width: ${size}px;
    `}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={color}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
)

const bulleted = css`
  .bullet-container {
    display: none;
  }

  .active {
    display: flex;
    justify-content: flex-end;

    .bullet-container {
      padding: 0 3px 0 8px;
      display: inline-block;
      vertical-align: middle;
    }

    svg {
      fill: ${COLORS.YELLOW};
    }
  }
`

const SideNav = ({ color }) => (
  <header css={headerContainerStyles(color)}>
    <div css={headerLinkStyles}>
      <div
        css={css`
          .active {
            svg {
              fill: ${COLORS.YELLOW};
            }
          }
        `}
      >
        <ScrollLink
          activeClass="active"
          to="duality"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Circle size={20} />
        </ScrollLink>
      </div>
      <div css={bulleted}>
        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          about
          <span className="bullet-container">
            <Circle size={14} />
          </span>
        </ScrollLink>
      </div>
      <div css={bulleted}>
        <ScrollLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          projects
          <span className="bullet-container">
            <Circle size={14} />
          </span>
        </ScrollLink>
      </div>
      <div css={bulleted}>
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          contact
          <span className="bullet-container">
            <Circle size={14} />
          </span>
        </ScrollLink>
      </div>
      <div
        css={css`
          .active {
            svg {
              fill: ${COLORS.PURPLE};
            }
          }
        `}
      >
        <ScrollLink
          activeClass="active"
          to="foot"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Circle fill={COLORS.YELLOW} size={20} />
        </ScrollLink>
      </div>
    </div>
  </header>
)

export default SideNav
