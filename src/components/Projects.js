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
            siteSocials {
              name
              linkTo
            }
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
    render={data => <Projects 
      siteSocials={data.site.siteMetadata.siteSocials} 
      projects={data.site.siteMetadata.projects} />}
  />
)

export default ProjectsWithData
