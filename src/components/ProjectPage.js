import React from "react"

import Console from "./Console"
import Video from "./Video"
import BrowserHeader from "./BrowserHeader"

import { css } from "@emotion/core"

export const projectContainer = () => {
  return css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
}

export const project = css`
  margin: auto;
  min-width: 375px;
  padding: 32px;
  font-size: 16px;
  width: 100%;

  @media (min-width: 512px) {
    padding: 48px;
  }

  @media (min-width: 768px) {
    padding: 24px;

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
    border: 6px solid black;
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
    const { name, link, info } = this.props

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
            // onMouseEnter={this.toggleIsConsoleOpen}
            // onMouseLeave={this.toggleIsConsoleOpen}
            >
              <Video name={name} />
              <Console info={info} isConsoleOpen={this.state.isConsoleOpen} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPage
