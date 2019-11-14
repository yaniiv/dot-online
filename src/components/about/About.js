import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../../colors"

const container = css`
  margin: 0 auto;
  width: 100%;
  padding: 60px 40px;
  display: flex;

  @media (min-width: 758px) {
    padding: 0 70px;
  }
  color: ${COLORS.WHITE_SOFT};
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

  return (
    <div css={container}>
      <div css={text}>
        <div css={css``}>
          <div>
            <img
              css={image}
              src="https://images.prismic.io/dot-online/591242e8-1e66-4d6e-b404-ee4d071ff28a_me.png?auto=compress,format"
            />
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
