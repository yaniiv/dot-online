import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../Layout"
import Duality from "../threejs/Duality"
import MagicBorder from "../MagicBorder"
import EmailForm from "./EmailForm"

const HomeEntry = () => (
  <StaticQuery
    query={graphql`
      query MinimalPageQuery {
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
        <Duality />
        <MagicBorder />
        <EmailForm />
      </Layout>
    )}
  />
)

export default HomeEntry
