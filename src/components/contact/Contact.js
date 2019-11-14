import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Email from "./Email"

const PRISMIC_CONTACT_QUERY = graphql`
  query Contact {
    prismicHome {
      data {
        text_field_html {
          html
        }
      }
    }
  }
`

const Contact = () => {
  const { prismicHome } = useStaticQuery(PRISMIC_CONTACT_QUERY)
  const html = prismicHome.data.text_field_html.html

  return (
    <div id="contact">
      <Email html={html} />
    </div>
  )
}

export default Contact
