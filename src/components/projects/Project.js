import React, { useState } from "react"
import { css } from "@emotion/core"

import Console from "./Console"
import ProjectGif from "./ProjectGif"
import BrowserHeader from "./BrowserHeader"
import Button from "../Button"

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
  }

  @media (min-width: 1024px) {
    max-width: 748px;
  }

  @media (min-width: 1200px) {
    max-width: 848px;
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

const Project = ({ data }) => {
  const [isConsoleOpen, setIsConsoleOpen] = useState(false)

  const toggleIsConsoleOpen = () => {
    setIsConsoleOpen(prevConsoleOpenState => {
      return !prevConsoleOpenState
    })
  }

  const { link, videoSrc, htmlDescription, imageSrc } = data

  return (
    <div css={projectContainer}>
      <div css={project}>
        <div css={browserFrame}>
          <BrowserHeader link={link} />
          <div>
            <ProjectGif videoSrc={videoSrc} imageSrc={imageSrc} />
            <Console
              htmlDescription={htmlDescription}
              isConsoleOpen={isConsoleOpen}
            />
          </div>
        </div>
        <div>
          <Button
            extraStyles={css`
              margin-left: auto;
            `}
            isActive={isConsoleOpen}
            iconName="info"
            text="Info"
            onClick={toggleIsConsoleOpen}
          />
        </div>
      </div>
    </div>
  )
}

export default Project
