import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../../colors"

const consoleContentStyles = css`
  background-color: ${COLORS.GREY};
  color: ${COLORS.WHITE};
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  a {
    color: ${COLORS.YELLOW};
  }
`

const aboutStyles = css`
  font-size: 16px;
  padding: 10px 18px;

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 24px;
  }
`

const About = ({ htmlDescription }) => (
  <div css={aboutStyles}>
    <div dangerouslySetInnerHTML={{ __html: htmlDescription }} />
  </div>
)

export const ConsoleContent = ({ htmlDescription, isConsoleOpen }) => {
  return (
    <div css={consoleContentStyles}>
      {isConsoleOpen && <About htmlDescription={htmlDescription} />}
    </div>
  )
}

export default ConsoleContent
