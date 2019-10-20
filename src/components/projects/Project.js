/* eslint-disable */
import React from "react"
import { css, jsx } from "@emotion/core"

import Console from "./Console"
import ProjectGif from "./ProjectGif"
import BrowserHeader from "./BrowserHeader"
import ProjectInfoButton from "./ProjectInfoButton"

import * as COLORS from "../../constants/colors"

export const projectContainer = () => {
  return css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${COLORS.GREY};
  `
}

export const project = css`
  margin: auto;
  min-width: 375px;
  padding: 32px;
  font-size: 16px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0;
  }

  @media (min-width: 768px) {
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
  border: 4px solid black;
  border-radius: 4px;

  @media (min-width: 768px) {
    border: 4px solid black;
    border-radius: 6px;
  }

  display: flex;
  flex-direction: column;
  position: relative;
`

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isConsoleOpen: false,
    }
  }

  toggleIsConsoleOpen = () => {
    this.setState(prevState => ({ isConsoleOpen: !prevState.isConsoleOpen }))
  }

  render() {
    console.warn("Project Component Props,", this.props.data)
    const { link, gif, info } = this.props.data

    return (
      <div css={projectContainer}>
        <div css={project}>
          <div css={browserFrame}>
            <BrowserHeader
              isConsoleOpen={this.state.isConsoleOpen}
              toggleIsConsoleOpen={this.toggleIsConsoleOpen}
              link={link}
            />
            <div
              onMouseEnter={this.toggleIsConsoleOpen}
              onMouseLeave={this.toggleIsConsoleOpen}
            >
              <ProjectGif gif={gif} />
              <Console info={info} isConsoleOpen={this.state.isConsoleOpen} />
              <ProjectInfoButton
                toggleIsConsoleOpen={this.toggleIsConsoleOpen}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPage
