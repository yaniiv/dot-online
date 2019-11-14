import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../../colors"

const container = css`
  background: ${COLORS.GREY};
  font-size: 22px;
  font-weight: 600px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  display: flex;
  width: 100%;
  margin: 0 auto;

  padding: 60px 40px;
  font-size: 18px;

  @media (min-width: 758px) {
    font-size: 20px;
    padding: 0 70px;
  }
  color: ${COLORS.WHITE};
`

const text = css`
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

const image = css`
  float: left;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  margin: 0 10px;

  @media (min-width: 758px) {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    margin: 10px 30px;
  }
`

const About = ({ prismicAbout }) => {
  const htmlContent = prismicAbout.data.text_rich_field.html
  const imageUrl = prismicAbout.data.image_of_me.url
  return (
    <div id="about" css={container}>
      <div css={text}>
        <div>
          <img css={image} src={imageUrl} />
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </div>
  )
}

export default About
