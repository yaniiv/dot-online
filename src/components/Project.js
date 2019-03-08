import React from "react"
// import { CloudinaryContext, Video, Transformation } from "cloudinary-react"
// import * as Styles from "./Project.style"
import BrowserButton from "./BrowserButton"
import { css } from "@emotion/core"

const cloudinaryRootUrl = "https://res.cloudinary.com/dzprezr1g/video/upload/"

const projectContainer = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const project = css`
  margin: auto;
  font-size: 16px;
  max-width: 640px;
  max-height: 420px;
`

const browserFrame = css`
  border: 8px solid black;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
`

const browserHeader = css`
  border-bottom: 8px solid black;
  height: 60px;
  width: 100%;
  display: flex;
`

const browserButtons = css`
  flex: 1;
  flex-direction: row;
  display: flex;
  padding: 0 16px;
`

const browserUrlBarContainer = css`
  flex: 4;
  padding: 8px 8px;
`

const browserUrlBar = css`
  background: transparent;
  border: 3px solid black;
  border-radius: 6px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const browserUrlLink = css`
  margin: auto 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen;
  text-decoration: none;
  font-size: 18px;
  color: blue;
  font-weight: 400;
  letter-spacing: 0.3px;
`

const ProjectBlock = ({ name, link }) => (
  <div css={projectContainer}>
    <div css={project}>
      <div>
        <div>
          {/* <div style={{ position: 'relative', zIndex: '50'}}>
            <BrowserWindow />
          </div> */}
          <div css={browserFrame}>
            <div css={browserHeader}>
              <div css={browserButtons}>
                <BrowserButton />
                <BrowserButton />
                <BrowserButton />
              </div>
              <div css={browserUrlBarContainer}>
                <div css={browserUrlBar}>
                  <a
                    css={browserUrlLink}
                    href="https://aftertheussr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                </div>
              </div>
            </div>
            <video
              muted
              controls
              width="100%"
              src={`${cloudinaryRootUrl}/${name}.mp4`}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

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
