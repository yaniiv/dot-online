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

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
`

const softGrey = "rgb(243, 243, 243)"
const white = "rgb(255, 255, 255)"
export const hoverGrey = "rgb(234, 234, 234)"
const borderGrey = "rgb(204, 204, 204)"
const lighterBorderGrey = "rgb(240, 240, 240)"

const baseConsoleStyles = css`
  position: absolute;
  right: 0;
  width: 0px;
  height: calc(100% - 60px);
  background-color: ${white};
  bottom: 0;
  transition: width 0.15s ease-in;
  display: flex;
  flex-direction: column;
  font-family: Lucida Grande;
`

const openConsoleStyles = css`
  transition: width 0.15s ease-out;
  width: 300px;
  border-left: 2px solid ${borderGrey};
`

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
  opacity: 0;
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

  ${isConsoleOpen &&
    css`
      transition: opacity 0.2s ease-in;
      opacity: 1;
    `}
`

const consoleContentStyles = css`
  opacity: 0;
  background-color: ${white};
  height: 100%;
  width: 100%;
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
  padding: 24px;
`

const About = () => <div css={aboutStyles}>{loremIpsum}</div>

const toolsStyles = css`
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);

  > a {
    padding: 0 24px;
    flex-grow: 1;
    color: blue;
    border-bottom: 1px solid ${lighterBorderGrey};
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-decoration: none;

    :hover {
      background-color: ${lighterBorderGrey};
      text-decoration: underline;
    }
  }
`

const Tools = () => (
  <div css={toolsStyles}>
    <a href="xyz" target="_blank">
      <div>d3.js</div>
    </a>
    <a href="xyz" target="_blank">
      <div>scrollama.js</div>
    </a>
    <a href="xyz" target="_blank">
      <div> rollup.js</div>
    </a>
    <a href="xyz" target="_blank">
      <div>chroma.js</div>
    </a>
  </div>
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
      // onMouseEnter={() => handleClick(name)}
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
    // const isConsoleOpen = true;
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
          {/* <div css={css`border-right: 3px solid black;`}/> */}
          <ConsoleHeaderTab
            name="tools"
            handleClick={this.selectConsoleTab}
            isConsoleOpen={isConsoleOpen}
            activeTab={this.state.activeTab}
          />
        </div>
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
