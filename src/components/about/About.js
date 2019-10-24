import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import TextBlobs from "../TextBlobs"

import * as COLORS from "../../constants/colors"

const about = css`
  max-width: 500px;

  a {
    text-decoration: none;
  }
  a,
  a:visited {
    color: ${COLORS.YANIV};
  }
  a:hover {
    text-decoration: underline;
  }
`

const About = ({ textBlobs }) => (
  <div css={about}>
    {console.warn("prismic about textBlobs", textBlobs)}
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
  </div>
)

export default About
