/* eslint-disable */
import React from "react"
import { css } from "@emotion/core"
import { hoverGrey } from "./Console"
import BrowserButton from "./BrowserButton"

import * as COLORS from "../../constants/colors"

const browserHeader = css`
  height: 60px;
  display: flex;
  background-color: #9c9795;
  border-bottom: 4px solid black;
  border-radius: 4px;
`

// const browserButtons = css`
//   flex: 1;
//   flex-direction: row;
//   padding: 0 16px;
//   display: none;

//   @media (min-width: 768px) {
//     display: flex;
//   }
// `

const browserUrlBarContainer = css`
  /* flex: 7;

  @media (min-width: 768px) {
    flex: 4;
  } */

  display: flex;
  width: 100%;
  padding: 8px 8px;
  background: transparent;
`

const browserUrlBar = css`
  background: ${COLORS.GREY_DARK};
  border: 2px solid black;
  border-radius: 6px;
  height: 100%;
  /* width: 100%; */
  flex: 1;
  cursor: pointer;
  padding: 0 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 34px;

  color: ${COLORS.YANIV};

  &:hover {
    text-decoration: underline;
  }
`

const eyeButtonStyles = css`
  margin: 8px;
  padding-top: 4px;
  padding-left: 2px;
  width: 38px;
  margin-left: 0;
  border: 2px solid black;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${COLORS.GREY_DARK};
  &:hover {
    path {
      fill: ${COLORS.YANIV};
    }
    circle {
      fill: blue;
    }
  }
`

const Settings = ({ size = 38, color = COLORS.BLACK }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" fill={COLORS.YANIV} />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const MoreVertical = ({ size = 28, color = COLORS.YELLOW }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="0.5" />
    <circle cx="12" cy="5" r="0.5" />
    <circle cx="12" cy="19" r="0.5" />
  </svg>
)

const BrowserHeader = ({ link, toggleIsConsoleOpen, isConsoleOpen }) => {
  console.warn("BrowserHeader toggleIsConsoleOpen", toggleIsConsoleOpen)
  return (
    <div css={browserHeader}>
      {/* <div css={browserButtons}>
        <BrowserButton />
        <BrowserButton />
        <BrowserButton />
      </div> */}
      <div css={browserUrlBarContainer}>
        <a
          css={browserUrlBar}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      </div>
      <div onClick={toggleIsConsoleOpen} css={eyeButtonStyles}>
        {/* <Settings /> */}
        <MoreVertical />
      </div>
    </div>
  )
}

export default BrowserHeader
