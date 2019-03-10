import React from "react"
import { css } from "@emotion/core"

// import { CloudinaryContext, Video, Transformation } from "cloudinary-react"

const cloudinaryRootUrl = "https://res.cloudinary.com/dzprezr1g/video/upload/"

const videoContainer = css`
  .console {
    background-color: darkslategray;
    // transform: translate3d(0, 0, 0);
    // transition: transform .25s ease-in-out;
    transition: max-height 0.3s ease-out;
    // opacity: 0;
    max-width: 0;
  }

  :hover {
    .console {
      transition: max-width 0.3s ease-out;
      max-width: 690px;
    }
  }
`

const video = css`
  width: 100%;
  vertical-align: middle;

  :hover {
    color: #5b5f5e;
  }
`

const Video = ({ name }) => {
  return (
    <div css={videoContainer}>
      <video
        css={video}
        autoPlay
        muted
        src={`${cloudinaryRootUrl}/${name}.mp4`}
      />
    </div>
  )
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

export default Video
