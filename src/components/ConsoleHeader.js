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

const purp = `rgb(125, 76, 219)`
const aqua = `#6cffb4`
const blue = "rgb(0, 169, 242)"
*/

const softGrey = "rgb(243, 243, 243)"
// const white = "rgb(255, 255, 255)"
export const hoverGrey = "rgb(234, 234, 234)"
const borderGrey = "rgb(204, 204, 204)"

const consoleHeaderStyles = css`
  background-color: ${softGrey};
  height: 50px;
  display: flex;
  flex-direction: row;
  text-align: center;
`

const getConsoleHeaderTabStyles = (isConsoleOpen, isActive) => css`
  height: 100%;
  line-height: 40px;
  font-size: 14px;
  flex-grow: 1;
  cursor: pointer;
  text-transform: capitalize;
  border-bottom: 1px solid ${borderGrey};

  :hover {
    background-color: ${hoverGrey};
  }

  ${isActive &&
    css`
      background-color: ${softGrey};
      border-bottom: 1px solid blue;

      :hover {
        background-color: ${softGrey};
      }
    `}
`

const openConsoleContentStyles = css`
  transition: opacity 0.2s ease-in;
  opacity: 1;
`


const getConsoleHeaderStyles = isConsoleOpen => css`
  ${consoleHeaderStyles};
  ${isConsoleOpen && openConsoleContentStyles};
`


const ConsoleHeaderTab = ({ activeTab, name, handleClick, isConsoleOpen }) => {
  const isActive = name === activeTab

  return (
    <div
      css={getConsoleHeaderTabStyles(isConsoleOpen, isActive)}
      onClick={() => handleClick(name)}
      // onMouseEnter={() => handleClick(name)}
    >
      {name}
    </div>
  )
}

class ConsoleHeader extends React.Component {
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
        <div css={getConsoleHeaderStyles(isConsoleOpen)}>
          <ConsoleHeaderTab
            name="about"
            handleClick={this.selectConsoleTab}
            isConsoleOpen={isConsoleOpen}
            activeTab={this.state.activeTab}
          />
          {/* <div css={css`border-right: 3px solid black;`}/> */}
          <ConsoleHeaderTab
            name="tools"
            handleClick={this.selectConsoleTab}
            isConsoleOpen={isConsoleOpen}
            activeTab={this.state.activeTab}
          />
      </div>
    )
  }
}

ConsoleHeader.propTypes = {
  isConsoleOpen: PropTypes.bool.isRequired,
}

export default ConsoleHeader
