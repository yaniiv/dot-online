import React from "react"

import Project from "./Project"
import { css } from "@emotion/core"

import * as SIZES from "../../sizes"

const Projects = ({ projects }) => (
  <div
    css={css`
      /* margin-top: -${SIZES.HEADER_HEIGHT_MOBILE};

      @media (min-width: 768px) {
        margin-top: -${SIZES.HEADER_HEIGHT_DESKTOP};
      } */
    `}
  >
    {projects.map(project => (
      <Project key={project.id} data={project} />
    ))}
  </div>
)

export default Projects
