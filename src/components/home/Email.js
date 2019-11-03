import React from "react"
import { css } from "@emotion/core"

import Form from "./Form"
import TextBlobs from "../TextBlobs"

import * as COLORS from "../../colors"

const pageContainer = css`
  height: 100vh;
  width: 100vw;
  background: ${COLORS.CONTACT_FORM_BACKGROUND};

  display: flex;
  flex-direction: column;
  justify-content: center;
`

function createMarkup(html) {
  return { __html: html }
}

export default function Email({ textBlobs, html }) {
  console.warn("Email", { html })
  return (
    <div css={pageContainer}>
      <div
        css={css`
          display: flex;
          margin: 16px auto;
          max-width: 400px;
          flex-direction: column;

          font-family: "Manjari", sans-serif;
          @media (min-width: 768px) {
            max-width: unset;
            flex-direction: row;
            /* border: 4px solid black; */
            margin: 100px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            padding: 0 24px;
            flex-direction: column;
            @media (min-width: 768px) {
              flex-direction: row;
            }
          `}
        >
          <div
            css={css`
              flex: 2;
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
            {/* <TextBlobs textBlobs={textBlobs} /> */}
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}
