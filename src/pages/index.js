import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BrowserWindow from "../components/browser-window"

import { auto } from "eol"

const ProjectBlock = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        margin: "auto",
        fontSize: "16px",
        // padding: "2rem",
        width: "600px",
        height: "410px",
        background: "#f9f9f9",
        boxShadow: "inset 2px 2px 6px rgba(0,0,0,.1)",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          lineHeight: "22px",
        }}
      >
        {/* <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p> */}
        
        <div style={{  margin: ' 0 auto'}}>
          <BrowserWindow />
          {/* <Image />  */}
        </div>
      </div>
    </div>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`yaniv`, `goldobin`]} />
    <ProjectBlock />
    <ProjectBlock />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
