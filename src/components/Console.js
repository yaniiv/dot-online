import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import ConsoleHeader from './ConsoleHeader'

import ConsoleContent from './ConsoleContent'
/* 
#8b8b8b
#747474
#b9b9b9
#747474
#5d5d5d
#464646
#2e2e2e
#171717

const purp = `rgb(125, 76, 219)`
const aqua = `#6cffb4`
const blue = "rgb(0, 169, 242)"
*/

// const softGrey = "rgb(243, 243, 243)"
const white = "rgb(255, 255, 255)"
export const hoverGrey = "rgb(234, 234, 234)"
const borderGrey = "rgb(204, 204, 204)"
// const lighterBorderGrey = "rgb(240, 240, 240)"

const baseConsoleStyles = css`
  position: absolute;
  right: 0;
  width: 300px;
  opacity: 0;
  height: calc(100% - 60px);
  background-color: ${white};
  bottom: 0;
  transition: width 0.15s ease-in;
  display: flex;
  flex-direction: column;
  font-family: Lucida Grande;
`

const openConsoleStyles = css`
  transition: opacity 0.15s ease-out;
  opacity: 1;
  border-left: 2px solid ${borderGrey};
`

const getConsoleStyles = isConsoleOpen => css`
  ${baseConsoleStyles};
  ${isConsoleOpen && openConsoleStyles};
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
    const { isConsoleOpen } = this.props
    // const isConsoleOpen = true;
    console.warn("this.state.activeTab", this.state.activeTab)

    return (
      <div css={getConsoleStyles(isConsoleOpen)}>
        <ConsoleHeader activeTab={this.state.activeTab} selectConsoleTab={this.selectConsoleTab}/>
        >
        <ConsoleContent
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
