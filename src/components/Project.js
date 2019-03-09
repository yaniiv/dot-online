import React from "react"

import Console from "./Console"
import Video from "./Video"
import BrowserHeader from "./BrowserHeader"

import * as styles from "./Project.style"
class ProjectBlock extends React.Component {
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
      <div css={styles.projectContainer}>
        <div css={styles.project}>
          {/* <div style={{ position: 'relative', zIndex: '50'}}>
                <BrowserWindow />
              </div> */}
          <div css={styles.browserFrame}>
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

export default ProjectBlock
