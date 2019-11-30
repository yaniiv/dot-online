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

const ProjectGif = ({ gifSrc, imageSrc }) => {
  let projectMediaSource = imageSrc

  if (isDesktop()) {
    projectMediaSource = gifSrc
  }

  return (
    <div css={gifContainer}>
      <img
        alt="gif-of-project"
        css={image}
        src={addImgixParams(projectMediaSource)}
      />
    </div>
  )
}

export default ProjectGif
