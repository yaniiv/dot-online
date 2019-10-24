import React from "react"

import Project from "./Project"
import { css } from "@emotion/core"

import * as SIZES from "../../constants/sizes"

const Projects = ({ projects }) => (
  <div
    css={css`
      margin-top: -${SIZES.HEADER_HEIGHT};
    `}
  >
    {projects.map(project => (
      <Project key={project.id} data={project} />
    ))}
  </div>
)

export default Projects
