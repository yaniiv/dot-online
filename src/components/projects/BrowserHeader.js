import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../../constants/colors"

const browserHeader = css`
  height: 60px;
  display: flex;
  background-color: #9c9795;
  border-bottom: 4px solid black;
  border-radius: 4px;
`

const browserUrlBarContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 8px;
  background: transparent;
`

const browserUrlBar = css`
  background: ${COLORS.GREY_DARK};
  border: 2px solid black;
  border-radius: 6px;
  height: 100%;
  display: flex;
  justify-content: space-between;
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

const ExternalLink = ({ color = COLORS.YELLOW }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    css={css`
      vertical-align: middle;
      stroke-width: 1.5;
      height: 16px;
      width: 16px;

      @media (min-width: 768px) {
        stroke-width: 2;
      }
    `}
    stroke={color}
    // strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g fill="none" fill-rule="evenodd">
      <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
    </g>
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
          <div>
            <ExternalLink />
          </div>
        </a>
      </div>
      {/* <div onClick={toggleIsConsoleOpen} css={eyeButtonStyles}> */}
      {/* <Settings /> */}
      {/* <MoreVertical /> */}
      {/* </div> */}
    </div>
  )
}

export default BrowserHeader
