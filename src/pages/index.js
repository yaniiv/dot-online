import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectBlock from "../components/project-block"

import { auto } from "eol"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`yaniv`, `goldobin`]} />
    <ProjectBlock videoId="after-the-ussr"/>
    <ProjectBlock videoId="scott-perry"/>
    <ProjectBlock videoId="terminal-portfolio"/>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
