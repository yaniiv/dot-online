import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

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

function createMarkup(html) {
  console.warn({ html })
  return { __html: html }
}

const About = ({ html }) => (
  <div css={about}>
    {console.warn({ html })}
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
    <div
      css={css`
        word-break: break-all;
        overflow-wrap: break-all;
        display: inline-block;
      `}
    >
      <div dangerouslySetInnerHTML={createMarkup(html)} />
    </div>
  </div>
)

export default About
