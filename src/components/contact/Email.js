import React from "react"
import { css } from "@emotion/core"

import Form from "./Form"

import * as COLORS from "../../colors"

const pageContainer = css`
  width: 100vw;
  height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 18px;
  @media (min-width: 758px) {
    font-size: 20px;
  }
`

const contentContainer = css`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  padding: 0 30px;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 0 100px;
    flex-direction: row;
  }
`

const text = css`
  margin-bottom: 24px;
  color: ${COLORS.WHITE_SOFT};

  @media (min-width: 768px) {
    padding-right: 48px;
  }

  a {
    text-decoration: none;
    color: ${COLORS.YELLOW};
  }

  a:visited {
    color: ${COLORS.YELLOW};
  }
  a:hover {
    text-decoration: underline;
  }
`

export default function Email({ html }) {
  return (
    <div css={pageContainer}>
      <div css={contentContainer}>
        <div css={text}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <Form />
      </div>
    </div>
  )
}
