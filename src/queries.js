import { useStaticQuery, graphql } from "gatsby"

// export const PRISMIC_CONTACT = graphql`
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

export const PRISMIC_ABOUT = graphql`
  query About {
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
  }
`

export const PRISMIC_PROJECTS = graphql`
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
`
