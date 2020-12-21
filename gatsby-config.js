require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.warn(`.env.${process.env.NODE_ENV}`)

module.exports = {
  siteMetadata: {
    title: "yaniv's link forest",
    description: "don't get lost",
    author: "@yantonsoup",
    siteSocials: [
      {
        name: "github",
        linkTo: "https://github.com/yantonsoup",
      },
      {
        name: "linkedin",
        linkTo: "https://linkedin.com/in/ygoldobin",
      },
      {
        name: "medium",
        linkTo: "https://medium.com/@yaniv_g",
      },
      {
        name: "twitter",
        linkTo: "https://twitter.com/yantonsoup",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.yanivgoldobin.com",
        sitemap: "https://www.yanivgoldobin.com/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/wp-admin/", "/wp-content/"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `yaniv.online`,
    //     short_name: `yaniv`,
    //     start_url: `/`,
    //     background_color: `#412C94`,
    //     theme_color: `#ffd926`,
    //     display: `standalone`,
    //     icon: `src/images/hollow-64.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
