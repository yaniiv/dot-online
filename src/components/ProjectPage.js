import React from "react"

import Console from "./Console"
import Video from "./Video"
import BrowserHeader from "./BrowserHeader"

import { css } from "@emotion/core"

export const projectContainer = css`
  height: ${window.innerHeight}px;
  width: ${window.innerWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const project = css`
  margin: auto;
  padding: 24px;
  font-size: 16px;
  max-width: 500px;
  max-height: 468px;

  @media (min-width: 768px) {
    max-width: 648px;
    max-height: 468px;
  }
`

export const browserFrame = css`
  border: 8px solid black;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  position: relative;
`

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openConsole: false,
    }
  }

  toggleConsole = () => {
    console.warn("h")
    this.setState(prevState => ({ openConsole: !prevState.openConsole }))
  }

  render() {
    const { name, link } = this.props

    return (
      <div css={projectContainer}>
        <div css={project}>
          {/* <div style={{ position: 'relative', zIndex: '50'}}>
                <BrowserWindow />
              </div> */}
          <div css={browserFrame}>
            <BrowserHeader link={link} />
            <div
              onMouseEnter={this.toggleConsole}
              onMouseLeave={this.toggleConsole}
            >
              <Video name={name} />
              <Console />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPage
