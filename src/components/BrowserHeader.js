import React from "react"
import { css } from "@emotion/core"
import { hoverGrey } from "./Console"
import BrowserButton from "./BrowserButton"

const browserHeader = css`
  height: 60px;
  width: 100%;
  display: flex;
  border-bottom: 4px solid black;
  background-color: white;
`

const browserButtons = css`
  flex: 1;
  flex-direction: row;
  padding: 0 16px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

const browserUrlBarContainer = css`
  flex: 4;
  padding: 8px 8px;
`

const browserUrlBar = css`
  background: transparent;
  border: 3px solid black;
  border-radius: 6px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: ${hoverGrey};
  }
`

const browserUrlLink = css`
  padding: 0 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen;
  text-decoration: none;
  font-size: 18px;
  color: blue;
  font-weight: 400;
  letter-spacing: 0.3px;

  :hover {
    text-decoration: underline;
  }
`

const BrowserHeader = ({ link }) => {
  return (
    <div css={browserHeader}>
      <div css={browserButtons}>
        <BrowserButton />
        <BrowserButton />
        <BrowserButton />
      </div>
      <div css={browserUrlBarContainer}>
        <div css={browserUrlBar}>
          <a
            css={browserUrlLink}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
        </div>
      </div>
    </div>
  )
}

export default BrowserHeader
