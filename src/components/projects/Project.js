import React, { useState } from "react"
import { css } from "@emotion/core"

import Console from "./Console"
import ProjectGif from "./ProjectGif"
import BrowserHeader from "./BrowserHeader"
import Button from "../Button"
import MagicBorder from "../home/MagicBorder"

import * as COLORS from "../../colors"

export const projectContainer = css`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${COLORS.PURPLE};

  @media (min-width: 768px) {
    height: 95vh;
  }
`

export const project = css`
  width: 100%;
  min-width: 375px;
  z-index: 10;
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

const browserFrame = css`


  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);

  border: 2px solid black;
  border-radius: 2px;
  @media (min-width: 768px) {
    border: 3px solid black;
    border-radius: 6px;
  }
`

const titleContainer = css`
  margin-left: 0;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-left: -80px;
    margin-bottom: 20px;
    padding: 10px;
  }
`

const projectTitle = css`
  font-size: 18px;
  font-weight: 600px;
  color: ${COLORS.YELLOW};

  @media (min-width: 768px) {
    font-size: 26px;
  }
`

const projectSubtitle = css`
  font-size: 14px;
  color: ${COLORS.WHITE};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const Title = ({title, subtitle}) => (
  <div css={titleContainer}>
    <div css={projectTitle}>
      {title}
    </div>
    <div css={projectSubtitle}>{subtitle}</div>
    </div>
)

const Project = ({ data }) => {
  const [isConsoleOpen, setIsConsoleOpen] = useState(false)

  const toggleIsConsoleOpen = () => {
    setIsConsoleOpen(prevConsoleOpenState => {
      return !prevConsoleOpenState
    })
  }

  const { link, title, subtitle, videoSrc, htmlDescription, imageSrc } = data

  return (
    <div css={projectContainer}>
      <div css={project}>
      <Title title={title} subtitle={subtitle}/>
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
