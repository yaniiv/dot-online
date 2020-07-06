import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import Project from "./Project"

// const PRISMIC_PROJECT_QUERY = graphql`
//   query Projects {
//     allProjectss {
//       edges {
//         node {
//           slug
//           project_title
//           project_text
//           project_subtitle
//           project_website {
//             _linkType
//             ... on _ExternalLink {
//               url
//             }
//           }
//           project_image {
//             _linkType
//             ... on _FileLink {
//               url
//             }
//           }
//           project_video {
//             _linkType
//             ... on _FileLink {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `

function normalizeProjectData(allPrismicProjects) {
  const projectData = allPrismicProjects.edges.reduce(
    (projectsBySlug, project) => {
      const {
        node: {
          id,
          data: {
            slug,
            project_subtitle,
            project_title,
            project_website,
            project_text,
            project_image,
            project_video,
          },
        },
      } = project

      const videoSrc = project_video ? project_video.url : null

      const normalizedProject = {
        id,
        slug,
        title: project_title.text,
        subtitle: project_subtitle.text,
        link: project_website.url,
        videoSrc,
        imageSrc: project_image.url,
        htmlDescription: project_text.html,
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

const projectsInOrder = ["ussr", "sperry", "terminal", "dispersion"]

const projectContainer = css`
  padding-bottom: 24px;

  @media (min-width: 768px) {
    padding-bottom: 48px;
  }
`

const Projects = () => {
  // const { allPrismicProjects } = useStaticQuery(PRISMIC_PROJECT_QUERY)
  // const projectsBySlug = normalizeProjectData(allPrismicProjects)

  return (
    <div id="projects" css={projectContainer}>
      {/* {projectsInOrder.map((projectSlug, index) => (
        <Project key={index} data={projectsBySlug[projectSlug]} />
      ))} */}
    </div>
  )
}

export default Projects
