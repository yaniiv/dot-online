/* eslint-disable */
import React from "react"
import { css, jsx } from "@emotion/core"

import Console from "./Console"
import ProjectGif from "./ProjectGif"
import BrowserHeader from "./BrowserHeader"
import Icon from "../Icon"

import * as COLORS from "../../colors"

export const projectContainer = () => {
  return css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${COLORS.PURPLE};
  `
}

export const project = css`
  width: 100%;
  min-width: 375px;

  margin: auto;
  padding: 12px 40px;

  font-size: 16px;

  @media (min-width: 768px) {
    padding: 0;
    max-width: 648px;
    max-height: 468px;
  }

  @media (min-width: 1024px) {
    max-width: 748px;
    max-height: 528px;
  }

  @media (min-width: 1200px) {
    max-width: 848px;
    max-height: 578px;
  }
`

export const browserFrame = css`
  border: 2px solid black;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    border: 3px solid black;
    border-radius: 8px;
  }
`

const submitButton = css`
  cursor: pointer;
  color: ${COLORS.GREY_DARK};
  background: ${COLORS.YELLOW};
  border: 2px solid ${COLORS.PURPLE};
  margin-top: 24px;
  display: flex;
  border-radius: 4px;
  height: 50px;
  width: 150px;
  margin-left: auto;
  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);

  svg {
    display: block;
    margin-left: 8px;
    width: 24px;
    height: 24px;
  }
`

const Button = ({ toggleIsConsoleOpen }) => {
  return (
    <button onClick={toggleIsConsoleOpen} css={submitButton} value="Send Email">
      <div
        css={css`
          display: flex;
          margin: 0 auto;
        `}
      >
        More Info
        <div css={css``}>
          <Icon
            fill="none"
            css={css`
              stroke-width: 3;
              stroke-linecap: round;
              stroke-linejoin: round;
              fill: none;
            `}
            viewBox="0 0 24 24"
            name="info"
          />
        </div>
      </div>
    </button>
  )
}

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isConsoleOpen: false,
    }
  }

  toggleIsConsoleOpen = () => {
    console.warn("toggleIsConsoleOpen")
    this.setState(prevState => ({ isConsoleOpen: !prevState.isConsoleOpen }))
  }

  render() {
    console.warn("Project Component Props,", this.props.data)
    const { link, gif, info } = this.props.data

    return (
      <div css={projectContainer}>
        <div css={project}>
          <div css={browserFrame}>
            <BrowserHeader link={link} />
            <div>
              <ProjectGif gif={gif} />
              <Console info={info} isConsoleOpen={this.state.isConsoleOpen} />
            </div>
          </div>
          <div>
            <Button toggleIsConsoleOpen={this.toggleIsConsoleOpen} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPage
