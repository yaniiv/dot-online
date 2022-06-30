import React from "react"
import { css } from "@emotion/core"

import Email from "./Email"

import * as COLORS from "../../colors"

const contact = css`
  background: ${COLORS.PURPLE};
`

const Contact = () => {
  return (
    <div id="contact" css={contact}>
      <Email email="hello@yaniv.online" />
    </div>
  )
}

export default Contact
