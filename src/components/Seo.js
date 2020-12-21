/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import favicon64 from "../images/hollow-64.png"

import data from "../../content/data.js"

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={data.site.siteMetadata.title}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "64x64",
          href: `${favicon64}`,
        },
        {
          rel: "shortcut icon",
          type: "image/png",
          sizes: "64x64",
          href: `${favicon64}`,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: data.site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: data.site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: data.site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: data.site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: data.site.siteMetadata.description,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
