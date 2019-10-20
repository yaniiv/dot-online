import React from "react"
import { css } from "@emotion/core"

// import { CloudinaryContext, gif, Transformation } from "cloudinary-react"

const gifContainer = css`
  display: flex;
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
      /* max-width: 690px; */
    }
  }
`

const image = css`
  width: 100%;
  margin: 0;

  :hover {
    color: #5b5f5e;
  }
`

const ProjectGif = ({ gif }) => {
  const { width, height, url } = gif

  return (
    <div css={gifContainer}>
      <img css={image} src={url} />
    </div>
  )
}

ProjectGif.defaultProps = {
  autoPlay: true,
}

export default ProjectGif
