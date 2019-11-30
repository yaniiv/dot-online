import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import * as COLORS from "../../colors"

const container = css`
  color: ${COLORS.WHITE_SOFT};
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  font-size: 18px;
  padding: 20px;

  @media (min-width: 758px) {
    width: 30%;
    font-size: 20px;
    padding: 40px;
  }

  a {
    color: ${COLORS.YELLOW};
    text-decoration: none;
    cursor: pointer;
  }
`

const PRISMIC_INTRO_QUERY = graphql`
  query Intro {
    prismicIntro {
      data {
        text {
          html
        }
      }
    }
  }
`

const Intro = () => {
  const { prismicIntro } = useStaticQuery(PRISMIC_INTRO_QUERY)
  const html = prismicIntro.data.text.html

  return (
    <div css={container}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Intro