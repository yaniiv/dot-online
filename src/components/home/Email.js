import React from "react"
import { css } from "@emotion/core"

import Form from "./Form"
import TextBlobs from "../TextBlobs"

import * as COLORS from "../../constants/colors"

const pageContainer = css`
  height: 100vh;
  width: 100vw;
  background: ${COLORS.CONTACT_FORM_BACKGROUND};

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function Email({ textBlobs }) {
  return (
    <div css={pageContainer}>
      <div
        css={css`
          display: flex;
          margin: 16px auto;
          max-width: 400px;

          font-family: "Manjari", sans-serif;
          @media (min-width: 768px) {
            max-width: unset;
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
                padding-right: 18px;
              }
            `}
          >
            <TextBlobs textBlobs={textBlobs} />
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}
