import React from "react"
import { css } from "@emotion/core"

import Form from "./Form"

import * as COLORS from "../../colors"

const pageContainer = css`
  background: ${COLORS.GREY};
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

function createMarkup(html) {
  return { __html: html }
}

export default function Email({ textBlobs, html }) {
  return (
    <div css={pageContainer}>
      <div
        css={css`
          max-width: 1000px;
        `}
      >
        <div
          css={css`
            display: flex;
            padding: 0 40px;
            flex-direction: column;
            @media (min-width: 768px) {
              padding: 0 24px;
              flex-direction: row;
            }
          `}
        >
          <div
            css={css`
              margin-bottom: 24px;
              font-size: 22px;
              color: ${COLORS.WHITE};
              @media (min-width: 768px) {
                padding-right: 48px;
              }

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
            `}
          >
            <div dangerouslySetInnerHTML={createMarkup(html)} />
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}
