import React from "react"
import { css } from "@emotion/core"

import Image from "../Image"

import * as COLORS from "../../colors"

const textContainer = css`
  margin: 0 auto;
  width: 100%;
  padding: 0 40px;
  display: flex;

  @media (min-width: 758px) {
    padding: 0 70px;
  }
  color: ${COLORS.WHITE_SOFT};
`

const aboutContent = css`
  max-width: 600px;
  margin: 0 auto;

  a {
    color: ${COLORS.YANIV};
  }

  a:visited {
    color: ${COLORS.DARK_END_DUALITY};
  }
  a:hover {
    text-decoration: underline;
  }
`

const About = ({ prismicAbout }) => {
  const htmlContent = prismicAbout.data.text_rich_field.html

  return (
    <div css={textContainer}>
      {/* <Image src="me.png" /> */}
      <div css={aboutContent}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  )
}

export default About
