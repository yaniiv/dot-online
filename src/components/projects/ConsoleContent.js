import React from "react"
import { css } from "@emotion/core"
import * as COLORS from "../../colors"

const consoleContentStyles = css`
  background-color: ${COLORS.GREY};
  height: 100%;
  width: 100%;
`

const aboutStyles = css`
  @media (max-width: 768px) {
    position: absolute;
  }

  font-size: 14px;
  padding: 10px 18px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`

const About = ({ about }) => <div css={aboutStyles}>{about}</div>

export const ConsoleContent = ({ info, isConsoleOpen }) => {
  return (
    <div css={consoleContentStyles}>
      {isConsoleOpen && <About about={info} />}
    </div>
  )
}

export default ConsoleContent
