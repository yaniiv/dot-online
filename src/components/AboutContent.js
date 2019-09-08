// import PropTypes from "prop-types"
import React from "react"
import Icon from "./Icon"
import { css } from "@emotion/core"
import Socials from "./Socials"

const fullPageOverlayStyles = css`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  background-color: lightgoldenrodyellow;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const aboutTextStyles = css`
  min-width: 375px;
  max-width: 750px;
  margin: 0 auto;
  font-family: Lucida Grande;
  padding: 40px;

  > div {
    margin: 12px 0;
  }
`

const AboutContent = () => {
  return (
    <div css={fullPageOverlayStyles}>
      <div css={aboutTextStyles}>
        <div>
          Hello, i'm Yaniv. I'm a software engineer in Los Angeles, California.
        </div>
        <div>This site is a collection of some of my projects.</div>
        <div>
          I'm particularly interested in working with technologies that will
          help me tell compelling stories with javascript.
        </div>
        <div className="proffesional">
          For my professional work, you can check out{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ygoldobin"
          >
            linkedin
          </a>
          .
        </div>
        <div>To get in touch you can email "xxx@email.com"</div>
      </div>
    </div>
  )
}

export default AboutContent
