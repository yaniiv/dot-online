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
const softGrey = "rgb(243, 243, 243)"
const borderGrey = "rgb(204, 204, 204)"
export const hoverGrey = "rgb(234, 234, 234)"
*/

const white = "rgb(255, 255, 255)"
const lighterBorderGrey = "rgb(240, 240, 240)"

const consoleContentStyles = css`
  background-color: white;
  height: 100%;
  width: 100%;
`

const toolsStyles = css`
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);

  > a {
    padding: 4px 24px;
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

const aboutStyles = css`
  color: black;
  font-size: 14px;
  padding: 10px 18px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`

const About = ({ about }) => <div css={aboutStyles}>{about}</div>

const Tools = ({ tools }) => (
  <div css={toolsStyles}>
    {tools.map(({ name, toolLink, toolText }) => (
      <a href={toolLink} target="_blank">
        <div>{name}</div>
      </a>
    ))}
  </div>
)

const ConsoleContent = ({ activeTab, info }) => {
  console.warn({ info })
  return (
    <div css={consoleContentStyles}>
      {activeTab === "about" ? (
        <About about={info.about} />
      ) : (
        <Tools tools={info.tools} />
      )}
    </div>
  )
}

export default ConsoleContent
