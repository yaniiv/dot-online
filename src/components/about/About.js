import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Button from "../Button"

import * as COLORS from "../../colors"

const container = css`
  background: ${COLORS.PURPLE};
  font-weight: 600px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 12px 30px;
  font-size: 18px;

  @media (min-width: 758px) {
    font-size: 20px;
    padding: 0;
  }
  color: ${COLORS.WHITE};

  @media (min-width: 768px) {
    max-width: 648px;
  }

  @media (min-width: 1024px) {
    max-width: 748px;
  }

  @media (min-width: 1200px) {
    max-width: 848px;
  }
`

const text = css`
  /* max-width: 680px; */
  margin: 0 auto;
  padding: 24px;
  background: ${COLORS.GREY};
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);

  a {
    /* color: ${COLORS.YANIV}; */
    color: ${COLORS.LIGHT_END_DUALITY};
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

const buttonContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
    <div>
      <div id="about" css={container}>
        <div css={text}>
          <div>
            <img alt="yaniv" css={image} src={imageUrl} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
        <div css={buttonContainer}>
          <Button text="About" />
          <Button text="Skills" />
          <Button text="Education" />
        </div>
      </div>
    </div>
  )
}

export default About
