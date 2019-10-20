import React from "react"
import { css } from "@emotion/core"

const gifContainer = css`
  display: flex;
  padding: 24px;

  @media (min-width: 768px) {
    padding: 0;
  }
`

const image = css`
  margin: 0;

  :hover {
    color: #5b5f5e;
  }
`

const ProjectGif = ({ gif }) => {
  const { url } = gif

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
