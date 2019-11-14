import React from "react"
import { css } from "@emotion/core"

import Form from "../home/Form"

import * as COLORS from "../../colors"

const pageContainer = css`
  background: ${COLORS.GREY};
  height: calc(100vh - 100px);
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function Email({ prismicHome }) {
  const html = prismicHome.data.text_field_html.html

  return (
    <div css={pageContainer}>
      <div
        css={css`
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          padding: 0 40px;
          flex-direction: column;
          @media (min-width: 768px) {
            padding: 0 100px;
            flex-direction: row;
          }
        `}
      >
        <div
          css={css`
            margin-bottom: 24px;
            font-size: 22px;
            color: ${COLORS.WHITE_SOFT};
            @media (min-width: 768px) {
              padding-right: 48px;
            }

            a {
              color: ${COLORS.YELLOW};
            }

            a:visited {
              color: ${COLORS.DARK_END_DUALITY};
            }
            a:hover {
              text-decoration: underline;
            }
          `}
        >
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <Form />
      </div>
    </div>
  )
}
