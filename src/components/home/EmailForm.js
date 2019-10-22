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
            flex-direction: column;
            @media (min-width: 768px) {
              flex-direction: row;
            }
          `}
        >
          <div
            css={css`
              flex: 2;

              font-size: 22px;
              color: ${COLORS.WHITE};
            `}
          >
            <div
              css={css`
                margin: 0 24px;
              `}
            >
              <p>
                Hi! I'm Yaniv. I write code sometimes. This site is my
                playground, as well as a portfolio.
              </p>
              <p>
                You've zoomed your way around the
                <a href="https://www.live-counter.com/how-big-is-the-internet/">
                  {" "}
                  vast{" "}
                </a>
                interwebs only to find yourself here. It would be fun for me if
                you told me...why?
              </p>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}
