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
  flex: 7;

  @media (min-width: 768px) {
    flex: 4;
  }
  padding: 8px 8px;
`

const browserUrlBar = css`
  background: transparent;
  border: 3px solid black;
  border-radius: 6px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;


`

const browserUrlLink = css`
  padding: 0 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 34px;

  :hover {
    background-color: ${hoverGrey};
  }

  @media (min-width: 768px) {
    flex: 11;
  }

`

const eyeButtonStyles = css`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.4rem;
    line-height: 1.1;

  text-align: center;
  line-height: 34px;
  cursor: pointer;
  border-left: 3px solid white;

  :hover {
    background-color: ${hoverGrey};
  }

  @media (min-width: 768px) {
    flex: 1;
  }

  :hover {
    background-color: ${hoverGrey};
  }
`

const eyeStyles = css`
  padding: 0 18px;
`

const ProjectInfoButton = () => (
  <div css={eyeButtonStyles}>
    <div css={eyeStyles}>
    i
    </div>
  </div>
)

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
          <ProjectInfoButton />

        </div>
      </div>
    </div>
  )
}

export default BrowserHeader
