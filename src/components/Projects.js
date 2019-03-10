import React from "react"
import ProjectPage from "./ProjectPage"
import { StaticQuery, graphql } from "gatsby"

const Projects = ({ projects }) => (
  <>
    {projects.map(project => (
      <ProjectPage key={project.name} {...project} />
    ))}
  </>
)

const ProjectsWithData = () => (
  <StaticQuery
    query={graphql`
      query ProjectDataQuery {
        site {
          siteMetadata {
            title
            projects {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Projects projects={data.site.siteMetadata.projects} />}
  />
)

export default ProjectsWithData;
