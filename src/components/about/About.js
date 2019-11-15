import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import * as COLORS from "../../colors"

const container = css`
  background: ${COLORS.GREY};
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
  overflow-y: scroll;

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

const PRISMIC_ABOUT_QUERY = graphql`
  query About {
    prismicAbout {
      data {
        image_of_me {
          url
        }
        text_rich_field {
          html
        }
      }
    }
  }
`

const About = () => {
  const { prismicAbout } = useStaticQuery(PRISMIC_ABOUT_QUERY)

  const html = prismicAbout.data.text_rich_field.html
  const imageUrl = prismicAbout.data.image_of_me.url

  return (
    <div id="about" css={container}>
      <div css={text}>
        <div>
          <img alt="yaniv" css={image} src={imageUrl} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  )
}

export default About
