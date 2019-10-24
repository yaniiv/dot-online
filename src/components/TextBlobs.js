import React from "react"
import { css } from "@emotion/core"

const TextBlobs = ({ textBlobs }) => (
  <div
    css={css`
      margin-bottom: 24px;
    `}
  >
    {textBlobs.map((text, index) => (
      <div
        key={index}
        css={css`
          margin-bottom: 12px;
        `}
      >
        {text}
      </div>
    ))}
  </div>
)

export default TextBlobs
