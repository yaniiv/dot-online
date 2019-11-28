import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Project from "./Project"

const PRISMIC_CONTACT_QUERY = graphql`
  query Projects {
    allPrismicProjects {
      edges {
        node {
          id
          data {
            slug
            project_website {
              url
            }
            project_gif {
              url
            }
            project_image {
              url
            }
            project_description {
              text
            }
          }
        }
      }
    }
  }
`

function normalizeProjectData(allPrismicProjects) {
  const projectData = allPrismicProjects.edges.reduce(
    (projectsBySlug, project) => {
      const {
        node: {
          id,
          data: {
            slug,
            project_website,
            project_gif,
            project_image,
            project_description,
          },
        },
      } = project

      const normalizedProject = {
        id,
        link: project_website.url,
        gifSrc: project_gif.url,
        imageSrc: project_image.url,
        info: project_description.text,
      }

      return {
        [slug]: normalizedProject,
        ...projectsBySlug,
      }
    },
    {}
  )

  return projectData
}

const projectsInOrder = ["ussr", "sperry", "terminal"]

const Projects = () => {
  const { allPrismicProjects } = useStaticQuery(PRISMIC_CONTACT_QUERY)
  const projectsBySlug = normalizeProjectData(allPrismicProjects)

  return (
    <div id="projects">
      {projectsInOrder.map((projectSlug, index) => (
        <Project key={index} data={projectsBySlug[projectSlug]} />
      ))}
    </div>
  )
}

export default Projects
