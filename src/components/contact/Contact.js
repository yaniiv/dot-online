import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Email from "./Email"

import * as COLORS from "../../colors"

const contact = css`
  background: ${COLORS.PURPLE};
`

// const PRISMIC_CONTACT_QUERY = graphql`
//   query Contact {
//     prismicHome {
//       data {
//         text_field_html {
//           html
//         }
//       }
//     }
//   }
// `

const Contact = () => {
  // const { prismicHome } = useStaticQuery(PRISMIC_CONTACT_QUERY)
  // const html = prismicHome.data.text_field_html.html

  return (
    <div id="contact" css={contact}>
      {/* <Email html={html} /> */}
    </div>
  )
}

export default Contact
