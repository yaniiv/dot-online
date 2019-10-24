import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import ConsoleHeader from "./ConsoleHeader"
import ConsoleContent from "./ConsoleContent"

// const softGrey = "rgb(243, 243, 243)"
const white = "rgb(255, 255, 255)"
export const hoverGrey = "rgb(234, 234, 234)"
// const borderGrey = "rgb(204, 204, 204)"
// const lighterBorderGrey = "rgb(240, 240, 240)"

const getConsoleStyles = isConsoleOpen => css`
  position: absolute;
  right: 0;
  width: 100%;
  opacity: 0;
  height: calc(100% - 60px);
  background-color: ${white};
  bottom: 0;
  transition: width 0.15s ease-in;
  display: flex;
  flex-direction: column;
  font-family: Lucida Grande;

  ${isConsoleOpen &&
    css`
      transition: opacity 0.15s ease-out;
      opacity: 1;
      /* border-left: 2px solid black; */
    `}
`

class Console extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: "about" }
  }

  selectConsoleTab = activeTab => {
    this.setState({ activeTab })
  }

  render() {
    const { isConsoleOpen, info } = this.props
    // const isConsoleOpen = true;
    // console.warn("this.state.activeTab", this.state.activeTab)

    return (
      <div css={getConsoleStyles(isConsoleOpen)}>
        <ConsoleHeader
          activeTab={this.state.activeTab}
          selectConsoleTab={this.selectConsoleTab}
        />
        <ConsoleContent
          info={info}
          isConsoleOpen={isConsoleOpen}
          activeTab={this.state.activeTab}
        />
      </div>
    )
  }
}

Console.propTypes = {
  isConsoleOpen: PropTypes.bool.isRequired,
}

export default Console
