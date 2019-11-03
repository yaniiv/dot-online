import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../Layout"
import Duality from "../threejs/Duality"
import MagicBorder from "../MagicBorder"
import Email from "./Email"
import Projects from "../projects/Projects"
import Socials from "../Socials"
import About from "../about/About"
import SideNav from "../SideNav"

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

const normalizePrismicAbout = ({ prismicAbout: { data } }) => {
  console.warn({ data })

  return data.text_fields.map(textField => {
    console.warn({ textField })

    return textField.text_field
  })
}

const aboutContainer = css`
  background: ${COLORS.GREY};
  @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif;
  font-size: 22px;
  font-weight: 600px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

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
        prismicAbout {
          id
          data {
            text_rich_field {
              html
              text
              raw {
                type
                text
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
        <SideNav />
        <div id="duality">
          <Duality />
        </div>

        <MagicBorder />

        <div className="about" css={aboutContainer}>
          <About prismicAbout={data.prismicAbout} />
        </div>

        <MagicBorder
          backgroundColor={COLORS.GREY}
          colorScale={[COLORS.LIGHT_END_DUALITY, COLORS.DARK_END_DUALITY]}
        />

        <div id="projects">
          <Projects projects={normalizeProjectData(data)} />
        </div>

        <MagicBorder />

        <div id="contact">
          <Email
            html={data.prismicHome.data.text_field_html.html}
            textBlobs={normalizePrismicHome(data)}
          />
        </div>
      </Layout>
    )}
  />
)

export default HomeEntry
