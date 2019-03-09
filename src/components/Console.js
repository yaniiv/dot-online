import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

/* 
#8b8b8b
#747474
#b9b9b9
#747474
#5d5d5d
#464646
#2e2e2e
#171717
*/

const baseConsoleStyles = css`
  position: absolute;
  right: 0;
  width: 0px;
  height: calc(100% - 60px);
  background-color: #2e2e2e;
  bottom: 0;
  transition: width 0.15s ease-in;
  display: flex;
  flex-direction: column;
`

const openConsoleStyles = css`
  transition: width 0.15s ease-out;
  width: 260px;
`

const consoleHeaderStyles = css`
  background-color: #464646;
  height: 40px;
  width: 100%;
`
const consoleContentStyles = css`
  background-color: yellow;
  height: 100%;
  width: 100%;
`

const getConsoleStyles = isConsoleOpen => css`
  ${baseConsoleStyles};
  ${isConsoleOpen && openConsoleStyles};
`

const Console = ({ isConsoleOpen }) => {
  return (
    <div css={getConsoleStyles(isConsoleOpen)}>
      <div css={consoleHeaderStyles}></div>
      <div css={consoleContentStyles}></div>
    </div>
  )
}

Console.propTypes = {
  isConsoleOpen: PropTypes.bool.isRequired,
}

export default Console
