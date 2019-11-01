import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import ConsoleContent from "./ConsoleContent"

import * as COLORS from "../../colors"

const getConsoleStyles = isConsoleOpen => css`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.YELLOW};
  position: absolute;
  right: 0;
  opacity: 0;
  width: 100%;
  display: flex;
  bottom: 0;
  transition: width 0.15s ease-in;
  flex-direction: column;
  margin-top: 0;

  @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif;

  height: calc(100% - 60px);

  ${isConsoleOpen &&
    css`
      opacity: 1;
      transition: opacity 0.15s ease-out;
    `}
`

class Console extends React.Component {
  render() {
    const { isConsoleOpen, info } = this.props

    return (
      <div css={getConsoleStyles(isConsoleOpen)}>
        <ConsoleContent info={info} isConsoleOpen={isConsoleOpen} />
      </div>
    )
  }
}

Console.propTypes = {
  isConsoleOpen: PropTypes.bool.isRequired,
}

export default Console
