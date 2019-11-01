import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../Layout"
import Projects from "./Projects"

import * as COLORS from "../../colors"

function normalizeProjectData(graphqlResponse) {
  console.warn("allPrismicProjects:", { graphqlResponse })

  const projectEdges = graphqlResponse.allPrismicProjects.edges
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

  console.warn("normalized allPrismicProjects:", { projectData })
  return projectData
}

const ProjectsEntry = () => (
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
    render={data => (
      <Layout backgroundColor={COLORS.GREY}>
        <Projects projects={normalizeProjectData(data)} />
      </Layout>
    )}
  />
)

export default ProjectsEntry
