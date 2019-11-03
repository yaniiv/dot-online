import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../../colors"

const textContainer = css`
  margin: 0 auto;
  width: 100%;
  padding: 24px;

  @media (min-width: 758px) {
    padding: 0 70px;
  }
  color: ${COLORS.WHITE_SOFT};
`

const aboutContent = css`
  a {
    text-decoration: none;
    color: ${COLORS.YANIV};
  }
  a,
  a:visited {
    color: ${COLORS.DARK_END_DUALITY};
  }
  a:hover {
    text-decoration: underline;
  }
`

function createMarkup(html) {
  return { __html: html }
}

const About = ({ prismicAbout }) => {
  const htmlContent = prismicAbout.data.text_rich_field.html
  console.warn("about HTML", htmlContent)

  return (
    <div css={textContainer}>
      <div css={aboutContent}>
        <div dangerouslySetInnerHTML={createMarkup(htmlContent)} />
      </div>
    </div>
  )
}

export default About
