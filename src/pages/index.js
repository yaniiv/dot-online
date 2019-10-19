import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import Duality from "../components/threejs/Duality"
import MagicBorder from "../components/MagicBorder"
import EmailForm from "../components/EmailForm"
import Header from "../components/Header"

import * as COLORS from "../constants/colors"
import * as SIZES from "../constants/sizes"

const MinimalPage = () => (
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
        {/* <SEO title="Page two" /> */}
        {/* <div css={headerBlock} /> */}
        {/* <div css={zog} /> */}
        {/* <Yaniv siteTitle={data.site.siteMetadata.title} /> */}
        {/* <Header siteTitle="yaniv" /> */}
        <div
          css={css`
            background: ${COLORS.DARK_END_DUALITY};
          `}
        >
          <Header height={SIZES.INDEX_HEADER_HEIGHT} siteTitle="yaniv" />
          <Duality />
        </div>
        <MagicBorder />
        <EmailForm />
        {/* <SEO title="Home" keywords={[`yaniv`, `goldobin`]} /> */}
        {/* <Projects /> */}
        {/* <About /> */}
        {/* <Socials siteSocials={data.site.siteMetadata.siteSocials} /> */}
        {/* <Link to="/minimal/">Go to page 2</Link> */}
        {/* <Link to="/">Go back to the homepage</Link> */}
      </Layout>
    )}
  />
)

export default MinimalPage
