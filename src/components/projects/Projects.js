import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Project from "./Project"

const PRISMIC_CONTACT_QUERY = graphql`
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
`

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

const Projects = () => {
  const { allPrismicProjects } = useStaticQuery(PRISMIC_CONTACT_QUERY)

  return (
    <div id="projects">
      {normalizeProjectData(allPrismicProjects).map(project => (
        <Project key={project.id} data={project} />
      ))}
    </div>
  )
}

export default Projects
