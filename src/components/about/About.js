import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import TextBlobs from "../TextBlobs"

import * as COLORS from "../../colors"

const about = css`
  max-width: 600px;
`

const skills = css`
  max-width: 600px;
`

const aboutContent = css`
  display: flex;

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

const About = ({ textBlobs, prismicAbout }) => {
  console.warn({ textBlobs })

  const htmlContent = prismicAbout.data.text_rich_field.html
  console.warn("ho", htmlContent)

  return (
    <div css={aboutContent}>
      <div css={about}>
        <div dangerouslySetInnerHTML={createMarkup(htmlContent)} />
      </div>
      {/* <div css={skills}>
        {console.warn("prismic skills textBlobs", textBlobs)}
        <h2>
          Hello, i'm{" "}
          <Link to="/">
            <span
              css={css`
                color: ${COLORS.DARK_END_DUALITY};
                text-decoration: underline;
                text-decoration-color: ${COLORS.YANIV};

                &:hover {
                  color: ${COLORS.YANIV};
                }
              `}
            >
              yaniv
            </span>
          </Link>
        </h2>
        <TextBlobs textBlobs={textBlobs} />
      </div> */}
    </div>
  )
}

export default About
