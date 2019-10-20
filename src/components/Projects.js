import React from "react"
import Project from "./Project"
import { StaticQuery, graphql } from "gatsby"

function normalizeProjectEdge(edge) {
  return {}
}

function normalizeProjectData(graphqlResponse) {
  const projectEdges = graphqlResponse.allPrismicProjects.edges
  console.warn({ projectEdges })
  const projectData = projectEdges.map(project => {
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

const Projects = ({ projects }) => (
  <>
    {projects.map(project => (
      <Project key={project.id} data={project} />
    ))}
  </>
)

const ProjectsWithData = () => (
  <StaticQuery
    query={graphql`
      query Projects {
        allPrismicProjects {
          edges {
            node {
              id
              first_publication_date
              data {
                project_website {
                  url
                  target
                }
                project_gif {
                  name
                  url
                  width
                  height
                }
                project_description {
                  html
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Projects projects={normalizeProjectData(data)} />}
  />
)

export default ProjectsWithData
