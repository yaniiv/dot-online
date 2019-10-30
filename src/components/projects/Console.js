import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import ConsoleContent from "./ConsoleContent"

import * as COLORS from "../../constants/colors"

const getConsoleStyles = isConsoleOpen => css`
  position: absolute;
  right: 0;
  width: 100%;
  opacity: 0;
  height: calc(100% - 60px);
  background-color: ${COLORS.WHITE};
  bottom: 0;
  transition: width 0.15s ease-in;
  display: flex;
  flex-direction: column;
  @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif;

  ${isConsoleOpen &&
    css`
      transition: opacity 0.15s ease-out;
      opacity: 1;
      /* border-left: 2px solid black; */
    `}
`

class Console extends React.Component {
  render() {
    const { isConsoleOpen, info } = this.props

    return (
      <div css={getConsoleStyles(isConsoleOpen)}>
        <ConsoleContent
          info={info}
          isConsoleOpen={isConsoleOpen}
          // activeTab={this.state.activeTab}
        />
      </div>
    )
  }
}

Console.propTypes = {
  isConsoleOpen: PropTypes.bool.isRequired,
}

export default Console
