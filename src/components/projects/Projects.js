import React from "react"

import Project from "./Project"

const Projects = ({ projects }) => (
  <>
    {projects.map(project => (
      <Project key={project.id} data={project} />
    ))}
  </>
)

export default Projects
