import React from "react"
import { css } from "@emotion/core"

const gifContainer = css`
  display: flex;
  /* display: block; */
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`

const image = css`
  margin: 0;
`

const ProjectGif = ({ gif }) => {
  const { url } = gif

  return (
    <div css={gifContainer}>
      <img alt="gif-of-project" css={image} src={url} />
    </div>
  )
}

ProjectGif.defaultProps = {
  autoPlay: true,
}

export default ProjectGif
