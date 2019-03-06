import React from "react"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import Project from "../components/Project"
import { StaticQuery, graphql } from "gatsby"

import { auto } from "eol"

const IndexPage = ({ projects }) => (
  <Layout>
    <SEO title="Home" keywords={[`yaniv`, `goldobin`]} />
    {console.warn("projects", projects)}
    {projects.map(project => (
      <Project key={project.name} {...project} />
    ))}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

const ProjectsWithData = () => (
  <StaticQuery
    query={graphql`
      query ProjectDataQuery {
        site {
          siteMetadata {
            title
            projects {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <IndexPage projects={data.site.siteMetadata.projects} />}
  />
)

export default ProjectsWithData
