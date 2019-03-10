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
      }
    ],
    projects: [
      {
        name: 'after-the-ussr',
        link: 'https://aftertheussr.com'
      },
      {
        name: 'scott-perry',
        link: 'https://github.com'
      },
      {
        name: 'terminal-portfolio',
        link: 'https://yanivgoldobin.com'
      }
    ]
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
