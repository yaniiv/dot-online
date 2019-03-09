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

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
`

const purp = `rgb(125, 76, 219)`
const aqua = `#6cffb4`
const softGrey = "#dadada"

const baseConsoleStyles = css`
  position: absolute;
  right: 0;
  width: 0px;
  height: calc(100% - 60px);
  background-color: ${softGrey};
  bottom: 0;
  transition: width 0.15s ease-in;
  display: flex;
  flex-direction: column;
`

const openConsoleStyles = css`
  transition: width 0.15s ease-out;
  width: 260px;
  border-left: 3px solid black;
`

const consoleHeaderStyles = css`
  background-color: ${aqua};
  height: 40px;
  border-bottom: 3px solid black;
  display: flex;
  flex-direction: row;
  text-align: center;
`

const getConsoleHeaderTabStyles = (isConsoleOpen,isActive) => css`
  height: 100%;
  line-height: 32px;
  flex-grow: 1;
  opacity: 0;
  
  ${isActive &&
    css`
      background-color: #4ddf99;
    `
  }

  ${isConsoleOpen &&
    css`
      transition: opacity 0.2s ease-in;
      opacity: 1;
    `}
`

const consoleContentStyles = css`
  opacity: 0;
  background-color: ${softGrey};
  height: 100%;
  width: 100%;
  padding: 18px;
`

const openConsoleContentStyles = css`
  transition: opacity 0.2s ease-in;
  opacity: 1;
`

const getConsoleStyles = isConsoleOpen => css`
  ${baseConsoleStyles};
  ${isConsoleOpen && openConsoleStyles};
`

const getConsoleContentStyles = isConsoleOpen => css`
  ${consoleContentStyles};
  ${isConsoleOpen && openConsoleContentStyles};
`

const getConsoleHeaderStyles = isConsoleOpen => css`
  ${consoleHeaderStyles};
  ${isConsoleOpen && openConsoleContentStyles};
`

const aboutStyles = css`
  color: black;
  font-size: 14px;
`

const About = () => <div css={aboutStyles}>{loremIpsum}</div>

const toolsStyles = css`

`

const Tools = () => (
    <ul>
      <li>d3.js</li>
      <li>scrollama.js</li>
      <li>chroma.js</li>
      <li>rollup.js</li>
    </ul>
)

const ConsoleContent = ({ activeTab, isConsoleOpen }) => {
  return (
    <div css={getConsoleContentStyles(isConsoleOpen)}>
      {activeTab === "about" ? <About /> : <Tools />}
    </div>
  )
}

const ConsoleHeaderTab = ({ activeTab, name, handleClick, isConsoleOpen }) => {
  const isActive = name === activeTab

  return (
    <div
      css={getConsoleHeaderTabStyles(isConsoleOpen, isActive)}
      onClick={() => handleClick(name)}
      onMouseEnter={() => handleClick(name)}
    >
      {name}
    </div>
  )
}

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
    console.warn("this.state.activeTab", this.state.activeTab)

    return (
      <div css={getConsoleStyles(isConsoleOpen)}>
        <div css={getConsoleHeaderStyles(isConsoleOpen)}>
          <ConsoleHeaderTab
            name="about"
            handleClick={this.selectConsoleTab}
            isConsoleOpen={isConsoleOpen}
            activeTab={this.state.activeTab}
          />
          <ConsoleHeaderTab
            name="tools"
            handleClick={this.selectConsoleTab}
            isConsoleOpen={isConsoleOpen}
            activeTab={this.state.activeTab}
          />
        </div>
        <ConsoleContent isConsoleOpen={isConsoleOpen} activeTab={this.state.activeTab} />
      </div>
    )
  }
}

Console.propTypes = {
  isConsoleOpen: PropTypes.bool.isRequired,
}

export default Console
