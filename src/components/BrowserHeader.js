import React from "react"
import { css } from "@emotion/core"

import BrowserButton from "./BrowserButton"

const browserHeader = css`
  height: 60px;
  width: 100%;
  display: flex;
  border-bottom: 8px solid black;
`

const browserButtons = css`
  flex: 1;
  flex-direction: row;
  display: flex;
  padding: 0 16px;
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
`

const browserUrlLink = css`
  margin: auto 16px;
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
