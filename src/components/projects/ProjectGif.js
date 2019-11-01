import React from "react"
import { css } from "@emotion/core"

const gifContainer = css`
  display: flex;
`

const image = css`
  width: 100%;
  height: 100%;
`

const ProjectGif = ({ gif }) => {
  const { url } = gif

  return (
    <div css={gifContainer}>
      <img alt="gif-of-projec" css={image} src={url} />
    </div>
  )
}

ProjectGif.defaultProps = {
  autoPlay: true,
}

export default ProjectGif
