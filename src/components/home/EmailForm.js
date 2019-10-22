import React from "react"
import { css } from "@emotion/core"

import Form from "./Form"

import * as COLORS from "../../constants/colors"

const pageContainer = css`
  height: 100vh;
  width: 100vw;
  background: ${COLORS.CONTACT_FORM_BACKGROUND};

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function EmailForm() {
  return (
    <div css={pageContainer}>
      <div
        css={css`
          display: flex;
          margin: 16px;
          font-family: "Manjari", sans-serif;
          @media (min-width: 768px) {
            /* border: 4px solid black; */
            margin: 100px;
          }
        `}
      >
        <div
          css={css`
            flex: 2;
            /* display: none; */
            /* @media (min-width: 768px) { */
            /* border: 4px solid black; */
            display: flex;
            /* } */
          `}
        >
          <div
            css={css`
              font-size: 22px;
              color: ${COLORS.WHITE};
              padding: 18px;
              @media (min-width: 768px) {
                /* border: 4px solid black; */
                /* display: flex; */
              }
            `}
          >
            <div
              css={css`
                margin: 0 40px;
              `}
            >
              You've flipped, tumbled, jumped, and stumbled your way through the{" "}
              <a href="https://www.live-counter.com/how-big-is-the-internet/">
                vast{" "}
              </a>
              highways of the internet to find yourself here. It would be fun
              for me if you told me...why?
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  )
}
