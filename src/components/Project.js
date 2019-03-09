import React from "react"

import * as styles from "./Project.style"
import BrowserButton from "./BrowserButton"
import Console from "./Console"

// import { CloudinaryContext, Video, Transformation } from "cloudinary-react"

const cloudinaryRootUrl = "https://res.cloudinary.com/dzprezr1g/video/upload/"

class ProjectBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      consoleIsOpen: false,
    }
  }

  // openConsole = () => {
  //   this.setState
  // }

  render() {
    const { name, link } = this.props

    return (
      <div css={styles.projectContainer}>
        <div css={styles.project}>
          {/* <div style={{ position: 'relative', zIndex: '50'}}>
                <BrowserWindow />
              </div> */}
          <div css={styles.browserFrame}>
            <div css={styles.browserHeader}>
              <div css={styles.browserButtons}>
                <BrowserButton />
                <BrowserButton />
                <BrowserButton />
              </div>
              <div css={styles.browserUrlBarContainer}>
                <div css={styles.browserUrlBar}>
                  <a
                    css={styles.browserUrlLink}
                    href="https://aftertheussr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                </div>
              </div>
            </div>
            <div css={styles.videoContainer}>
              <video
                css={styles.video}
                muted
                src={`${cloudinaryRootUrl}/${name}.mp4`}
              />
              <Console />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// {
//   /* <CloudinaryContext cloudName="dzprezr1g">
//     <div style={{
//       maxWidth: 1600,
//       maxHeight: 900
//     }}>
//     <Video controls autoplay autoPlay muted width={900} publicId={videoId}>
//       <Transformation  autoplay autoPlay muted width={900} quality="10" duration="10" />
//     </Video>
//     </div>
//   </CloudinaryContext> */
// }

export default ProjectBlock
