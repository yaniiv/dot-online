import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../Layout"
import Duality from "../threejs/Duality"
import MagicBorder from "../MagicBorder"
import Email from "./Email"
import Projects from "../projects/Projects"
import TransparentHeader from "../TransparentHeader"
import * as COLORS from "../../colors"

const normalizePrismicHome = ({ prismicHome: { data } }) => {
  return data.text_fields.map(({ text_field }) => text_field)
}

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

const HomeEntry = () => (
  <StaticQuery
    query={graphql`
      query Home {
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
        prismicHome {
          id
          data {
            text_field_html {
              html
            }
            text_fields {
              text_field
            }
          }
        }
      }
    `}
    render={data => (
      <Layout backgroundColor={COLORS.PURPLE}>
        <div>
          <TransparentHeader />
          <Duality />
        </div>

        <MagicBorder />
        <Projects projects={normalizeProjectData(data)} />

        <Email
          html={data.prismicHome.data.text_field_html.html}
          textBlobs={normalizePrismicHome(data)}
        />
      </Layout>
    )}
  />
)

export default HomeEntry
