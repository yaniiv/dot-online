import React from "react"

import Console from "./Console"
import Video from "./Video"
import BrowserHeader from "./BrowserHeader"
import Icon from "./Icon"
import { hoverGrey } from "./Console"

import { css, jsx } from "@emotion/core"

const eyeButtonStyles = {
  fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  fontWeight: 600,
  textRendering: "optimizeLegibility",
  fontSize: "1.6rem",
  textAlign: "center",
  lineHeight: "32px",
  cursor: "pointer",
  backgroundColor: "black",
  position: "absolute",
  right: 0,
  bottom: -50,
  height: 40,
  width: 40,
  border: "3px solid black",
  borderRadius: 40,
}

const eyeStyles = {
  color: 'white',
  backgroundColor: "transparent"
}

const ProjectInfoButton = ({toggleIConsoleOpen}) => {
  return (
      <div onClick={toggleIConsoleOpen} css={eyeButtonStyles}>
        <div css={eyeStyles}>i</div>
      </div>
  )
}

export default ProjectInfoButton
