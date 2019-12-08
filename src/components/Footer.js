import React from "react"
import { css } from "@emotion/core"

import Socials from "./Socials"

import * as COLORS from "../colors"

const FooterContainerStyles = css`
  background: ${COLORS.GREY_DARK};
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  color: ${COLORS.WHITE_SOFT};
  padding: 0 30px;
`

const Footer = () => {
  return (
    <footer id="foot" css={FooterContainerStyles}>
      <small>&copy; Copyright 2019, Yaniv Goldobin</small>
      <Socials />
    </footer>
  )
}

export default Footer
