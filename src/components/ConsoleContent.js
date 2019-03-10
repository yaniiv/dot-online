import React from "react"
// import PropTypes from "prop-types"
import { css } from "@emotion/core"

// import ConsoleHeader from './ConsoleHeader'
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

// const softGrey = "rgb(243, 243, 243)"
const white = "rgb(255, 255, 255)"
export const hoverGrey = "rgb(234, 234, 234)"
// const borderGrey = "rgb(204, 204, 204)"
const lighterBorderGrey = "rgb(240, 240, 240)"

const consoleContentStyles = css`
  background-color: ${white};
  height: 100%;
  width: 100%;
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

const ConsoleContent = ({ activeTab }) => {
  return (
    <div css={consoleContentStyles}>
      {activeTab === "about" ? <About /> : <Tools />}
    </div>
  )
}

export default ConsoleContent
