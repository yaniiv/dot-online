import React from "react"
// import { CloudinaryContext, Video, Transformation } from "cloudinary-react"

import BrowserWindow from "./browser-window"

const cloudinaryRootUrl = "https://res.cloudinary.com/dzprezr1g/video/upload/"

const ProjectBlock = ({videoId}) => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        margin: "auto",
        fontSize: "16px",
        width: "640px",
        height: "420px",
        // background: "#f9f9f9",
        // boxShadow: "inset 2px 2px 6px rgba(0,0,0,.1)",
        // borderRadius: "10px",
      }}
    >
      <div
      >
        <div style={{ margin: "0 auto", maxWidth: "640px", position: 'relative' }}>
          <div style={{ position: 'relative', zIndex: '50'}}>
            <BrowserWindow />
          </div>
          <div style={{ marginTop: 'auto', bottom: '0', position: 'absolute', bottom: '0' }}>
            <video  muted width="640px" src={`${cloudinaryRootUrl}/${videoId}.mp4`} />
          </div>
        
          {/* <CloudinaryContext cloudName="dzprezr1g">
            <div style={{
              maxWidth: 1600,
              maxHeight: 900
            }}>
            <Video controls autoplay autoPlay muted width={900} publicId={videoId}>
              <Transformation  autoplay autoPlay muted width={900} quality="10" duration="10" />
            </Video>
            </div>
          </CloudinaryContext> */}
        </div>
      </div>
    </div>
  </div>
)

export default ProjectBlock
