/* eslint-disable */
import React from "react"
// import PropTypes from "prop-types"
import { css } from "@emotion/core"
import * as COLORS from "../../constants/colors"

const consoleContentStyles = css`
  background-color: ${COLORS.PURPLE};
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
    border-bottom: 1px solid ${COLORS.GREY_LIGHT};
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-decoration: none;

    :hover {
      background-color: ${COLORS.GREY_DARK};
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

const Tools = ({ tools = [] }) => (
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
      {activeTab === "about" ? <About about={info} /> : <Tools tools={[]} />}
    </div>
  )
}

export default ConsoleContent
