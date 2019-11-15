import React, { useState } from "react"
import { css } from "@emotion/core"

import Console from "./Console"
import ProjectGif from "./ProjectGif"
import BrowserHeader from "./BrowserHeader"
import Icon from "../Icon"

import * as COLORS from "../../colors"

export const projectContainer = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${COLORS.PURPLE};
`

export const project = css`
  width: 100%;
  min-width: 375px;

  margin: auto;
  padding: 12px 30px;

  font-size: 18px;

  @media (min-width: 768px) {
    padding: 0;
    max-width: 648px;
    max-height: 468px;
  }

  @media (min-width: 1024px) {
    max-width: 748px;
    max-height: 528px;
  }

  @media (min-width: 1200px) {
    max-width: 848px;
    max-height: 578px;
  }
`

export const browserFrame = css`
  border: 2px solid black;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    border: 3px solid black;
    border-radius: 6px;
  }
`

const infoButton = css`
  color: ${COLORS.GREY_DARK};
  background: ${COLORS.YELLOW};
  border: 2px solid ${COLORS.PURPLE};
  margin-top: 24px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  height: 50px;
  width: 150px;
  margin-left: auto;
  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`

const Button = ({ toggleIsConsoleOpen }) => {
  return (
    <button onClick={toggleIsConsoleOpen} css={infoButton} value="Send Email">
      <div
        css={css`
          line-height: 28px;
        `}
      >
        More Info
      </div>
      <div>
        <Icon
          fill="none"
          css={css`
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
            margin-left: 8px;
            display: block;
          `}
          stroke="black"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          name="info"
        />
      </div>
    </button>
  )
}

const Project = ({ data }) => {
  const [isConsoleOpen, setIsConsoleOpen] = useState(false)

  const toggleIsConsoleOpen = () => {
    setIsConsoleOpen(prevConsoleOpenState => {
      return !prevConsoleOpenState
    })
  }

  const { link, gif, info } = data

  return (
    <div css={projectContainer}>
      <div css={project}>
        <div css={browserFrame}>
          <BrowserHeader link={link} />
          <div>
            <ProjectGif gif={gif} />
            <Console info={info} isConsoleOpen={isConsoleOpen} />
          </div>
        </div>
        <div>
          <Button toggleIsConsoleOpen={toggleIsConsoleOpen} />
        </div>
      </div>
    </div>
  )
}

export default Project
