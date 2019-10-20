require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.warn(`.env.${process.env.NODE_ENV}`)

module.exports = {
  siteMetadata: {
    title: `yaniv`,
    description: `yaniv, online`,
    author: `@yantonsoup`,
    siteSocials: [
      {
        name: `github`,
        linkTo: `https://github.com/yantonsoup`,
      },
      {
        name: `twitter`,
        linkTo: `https://twitter.com/yantonsoup`,
      },
      {
        name: `medium`,
        linkTo: `https://medium.com/@yaniv_g`,
      },
    ],
  },

  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/hollow-64.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/docs/sourcing-from-prismic/
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `dot-online`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
