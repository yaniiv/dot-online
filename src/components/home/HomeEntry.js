import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Waypoint } from "react-waypoint"

import Layout from "../Layout"
import Duality from "../threejs/Duality"
import MagicBorder from "../MagicBorder"
import Contact from "../contact/Contact"
import Projects from "../projects/Projects"
import About from "../about/About"
import SideNav from "../SideNav"

import * as QUERIES from "../../queries"

const HomeEntry = () => {
  const graphqlResponse = useStaticQuery(graphql`
    query Home {
      prismicHome {
        data {
          text_field_html {
            html
          }
        }
      }
      prismicAbout {
        data {
          image_of_me {
            url
          }
          text_rich_field {
            html
          }
        }
      }
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
  `)
  const [pauseDuality, setPauseDuality] = useState(false)

  return (
    <Layout>
      <SideNav />
      <Waypoint
        onEnter={() => {
          setPauseDuality(false)
        }}
        onLeave={() => {
          setPauseDuality(true)
        }}
      />

      <Duality pauseRender={pauseDuality} />
      <MagicBorder />

      <About prismicAbout={graphqlResponse.prismicAbout} />

      <MagicBorder />
      <Projects allPrismicProjects={graphqlResponse.allPrismicProjects} />
      <MagicBorder />

      <Contact prismicHome={graphqlResponse.prismicHome} />
    </Layout>
  )
}

export default HomeEntry
