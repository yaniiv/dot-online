import React from "react"
import { css } from "@emotion/core"

const gifContainer = css`
  display: flex;
`

const image = css`
  width: 100%;
  height: 100%;
`

const ProjectGif = ({ gifSrc }) => {
  return (
    <div css={gifContainer}>
      <img alt="gif-of-project" css={image} src={gifSrc} />
    </div>
  )
}

export default ProjectGif
