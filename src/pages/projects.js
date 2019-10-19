/* eslint-disable */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Header from "../components/Header"

import * as COLORS from "../constants/colors"
import * as SIZES from "../constants/sizes"

const Index = () => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
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
        <div
          css={css`
            background: ${COLORS.GREY};
          `}
        >
          <Header height={SIZES.INDEX_HEADER_HEIGHT} siteTitle="yaniv" />
          <Projects />
        </div>
      </Layout>
    )}
  />
)

export default Index
