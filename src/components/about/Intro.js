import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import * as COLORS from "../../colors"

const container = css`
  color: ${COLORS.YELLOW};
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  font-size: 18px;
  padding: 20px;

  @media (min-width: 758px) {
    width: 30%;
    font-size: 20px;
    padding: 40px;
  }

  a {
    color: ${COLORS.WHITE};
    cursor: pointer;
  }
`

const Intro = () => {
  return (
    <div css={container}>
      Hello! I'm Yaniv, a software engineer from San Francisco, California. This
      website is a collection of some of my more fully-formed side projects, the
      code for which I make open source on{" "}
      <a href="https://github.com/yantonsoup">github</a> whenever possible. If
      you're more curious about my professional work, you're probably better off
      checking <a href="https://www.linkedin.com/in/ygoldobin/">linkedin</a>.
    </div>
  )
}

export default Intro
