import React from "react"

import Layout from "../components/Layout"

import Projects from "../components/Projects"
import SEO from "../components/Seo"
import { Link } from "gatsby"

const Index = () => (
  <Layout>
    <SEO title="Home" keywords={[`yaniv`, `goldobin`]} />
    <Projects />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default Index
