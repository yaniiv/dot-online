/* eslint-disable */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import Projects from "../components/Projects"

// import Yaniv from "../components/Yaniv"
// import Socials from "../components/Socials"

const Index = () => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
        site {
          siteMetadata {
            title
            siteSocials {
              name
              linkTo
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        {/* <Yaniv siteTitle={data.site.siteMetadata.title} /> */}
        {/* <About /> */}
        {/* <Socials siteSocials={data.site.siteMetadata.siteSocials} /> */}
        <Projects />
      </Layout>
    )}
  />
)

export default Index
