module.exports = {
  siteMetadata: {
    title: `yaniv`,
    description: `yaniv, online`,
    author: `@yantonsoup`,
    aboutPage: {
      hello: "",
      coding: "",
    },
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
    projects: [
      {
        name: "after-the-ussr",
        link: "https://aftertheussr.com",
        info: {
          about:
            "A visual essay looking at where people went afeter the collapse of the soviet union.",
          tools: [
            {
              name: "d3.js",
              toolLink: "",
              toolText: "data visualisations and animations",
            },
            {
              name: "scrollama.js",
              toolLink: "",
              toolText: "scrollytelling functionality",
            },
            {
              name: "chroma.js",
              toolLink: "",
              toolText: "scrollytelling functionality",
            },
            {
              name: "rollup.js",
              toolLink: "",
              toolText: "bundler",
            },
          ],
        },
      },
      {
        name: "scott-perry",
        link: "https://github.com",
        info: {
          about: "A portfolio for Scott Perry",
          tools: [
            {
              name: "vimeo.js",
              toolLink: "",
              toolText: "inline videos",
            },
          ],
        },
      },
      {
        name: "terminal-portfolio",
        link: "https://yanivgoldobin.com",
        info: {
          about: "About me a-la terminal",
          tools: [
            {
              name: "jquery.js",
              toolLink: "",
              toolText: "all the things",
            },
          ],
        },
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

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
