import React from "react"

import Project from "./Project"
import { css } from "@emotion/core"

import * as SIZES from "../../sizes"

function normalizeProjectData(allPrismicProjects) {
  const projectData = allPrismicProjects.edges.map(project => {
    const {
      node: {
        id,
        data: { project_website, project_gif, project_description },
      },
    } = project

    return {
      id,
      link: project_website.url,
      gif: {
        ...project_gif,
      },
      info: project_description.text,
    }
  })

  return projectData
}

const Projects = ({ allPrismicProjects }) => (
  <div id="projects">
    {normalizeProjectData(allPrismicProjects).map(project => (
      <Project key={project.id} data={project} />
    ))}
  </div>
)

export default Projects
