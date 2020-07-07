import React from "react"
import { css } from "@emotion/core"

import Project from "./Project"

import data from '../../../content/data.js'

function normalizeProjectData() {
  const projectData = data.prismic.projects.reduce(
    (projectsBySlug, project) => {
      const {
        slug,
        project_subtitle,
        project_title,
        project_website,
        project_text,
        project_image,
        project_video,
      } = project

      const normalizedProject = {
        slug,
        title: project_title,
        subtitle: project_subtitle,
        link: project_website,
        videoSrc: project_video,
        imageSrc: project_image,
        htmlDescription: project_text,
      }

      return {
        [slug]: normalizedProject,
        ...projectsBySlug,
      }
    },
    {}
  )

  return projectData
}

const projectsInOrder = ["ussr", "sperry", "terminal", "dispersion"]

const projectContainer = css`
  padding-bottom: 24px;

  @media (min-width: 768px) {
    padding-bottom: 48px;
  }
`

const Projects = () => {
  const projectsBySlug = normalizeProjectData()

  return (
    <div id="projects" css={projectContainer}>
      {projectsInOrder.map((projectSlug, index) => (
        <Project key={index} data={projectsBySlug[projectSlug]} />
      ))}
    </div>
  )
}

export default Projects
