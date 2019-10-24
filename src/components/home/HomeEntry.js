import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../Layout"
import Duality from "../threejs/Duality"
import MagicBorder from "../MagicBorder"
import EmailForm from "./EmailForm"

const normalizePrismicHome = ({ prismicHome: { data } }) => {
  return data.text_fields.map(({ text_field }) => text_field)
}

const HomeEntry = () => (
  <StaticQuery
    query={graphql`
      query Home {
        prismicHome {
          id
          data {
            text_fields {
              text_field
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Duality />
        <MagicBorder />
        <EmailForm textBlobs={normalizePrismicHome(data)} />
      </Layout>
    )}
  />
)

export default HomeEntry
