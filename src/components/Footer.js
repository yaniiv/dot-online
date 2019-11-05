import React from "react"
import { css } from "@emotion/core"

import Socials from "./Socials"

import * as COLORS from "../colors"

const FooterContainerStyles = css`
  background: ${COLORS.GREY_DARK};
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  color: ${COLORS.GREY_LIGHT};
  padding: 0 40px;
`

const Footer = () => {
  return (
    <footer id="foot" css={FooterContainerStyles}>
      <div>Copyright 2019 © Yaniv Goldobin</div>
      <Socials />
    </footer>
  )
}

export default Footer
