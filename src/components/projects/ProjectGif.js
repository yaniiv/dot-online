import React from "react"
import { css } from "@emotion/core"

import { isDesktop } from "../../utils"

const gifContainer = css`
  display: flex;
`

const image = css`
  width: 100%;
  height: 100%;
`

const addImgixParams = src => {
  let params = "&q=65"

  if (isDesktop()) {
    params += "&w=848"
  } else {
    params += "&w=703"
  }

  return `${src}${params}`
}

const ProjectGif = ({ imageSrc, videoSrc }) => {
  return (
    <div css={gifContainer}>
      {videoSrc ? (
        <video alt="gif-of-project" css={image} autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img alt="gif-of-project" css={image} src={addImgixParams(imageSrc)} />
      )}
    </div>
  )
}

export default ProjectGif
