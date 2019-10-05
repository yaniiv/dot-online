import React from "react"
import HorizontalProject from "./HorizontalProject"
import { StaticQuery, graphql } from "gatsby"

const Projects = ({ projects }) => (
  <>
    {projects.map(project => (
      <HorizontalProject key={project.name} {...project} />
    ))}
  </>
)

const ProjectsWithData = () => (
  <StaticQuery
    query={graphql`
      query HorizontalProjectDataQuery {
        site {
          siteMetadata {
            title
            projects {
              name
              link
              info {
                about
                tools {
                  name
                  toolLink
                  toolText
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Projects projects={data.site.siteMetadata.projects} />}
  />
)

export default ProjectsWithData
