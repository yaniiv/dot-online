import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Waypoint } from "react-waypoint"
import { css } from "@emotion/core"

import Layout from "../Layout"
import Duality from "../threejs/Duality"
import MagicBorder from "../MagicBorder"
import Email from "./Email"
import Projects from "../projects/Projects"
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
  font-size: 22px;
  font-weight: 600px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HomeEntry = () => {
  const data = useStaticQuery(
    graphql`
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
          data {
            text_rich_field {
              html
            }
          }
        }
        prismicHome {
          data {
            text_field_html {
              html
            }
          }
        }
      }
    `
  )

  const [pauseDuality, setPauseDuality] = React.useState(false)

  return (
    <Layout backgroundColor={COLORS.PURPLE}>
      <SideNav />
      <div id="duality">
        <Duality pauseRender={pauseDuality} />
      </div>

      <Waypoint
        topOffset={"-100px"}
        onEnter={() => {
          console.warn("PLAY")
          setPauseDuality(false)
        }}
      />
      <MagicBorder />

      <div className="about" css={aboutContainer}>
        <About prismicAbout={data.prismicAbout} />
      </div>
      <Waypoint
        topOffset={"-100px"}
        onEnter={() => {
          console.warn("'PAUSE DAULTIY'")
          setPauseDuality(true)
        }}
      />
      <MagicBorder
        backgroundColor={COLORS.GREY}
        colorScale={[COLORS.LIGHT_END_DUALITY, COLORS.DARK_END_DUALITY]}
      />

      <div id="projects">
        <Projects projects={normalizeProjectData(data)} />
      </div>

      <MagicBorder />

      <div id="contact">
        <Email html={data.prismicHome.data.text_field_html.html} />
      </div>
    </Layout>
  )
}

export default HomeEntry
