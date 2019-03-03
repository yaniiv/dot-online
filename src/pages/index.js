import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
       <div style={{padding: "1.45rem"}}>
        <img src="https://placekitten.com/400/225" />
      </div>
    <div className="embedded">
   
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div> */}
      </div>
    </div>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
