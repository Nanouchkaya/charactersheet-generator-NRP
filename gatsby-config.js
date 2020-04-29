module.exports = {
  siteMetadata: {
    title: `NRP - générateur présentation`,
    description: ``,
    author: `Claudine Brun`,
  },
  plugins: [
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
        name: `NRP - générateur présentation`,
        short_name: `NRP prez`,
        start_url: `/`,
        background_color: `#23A9B5`,
        theme_color: `#23A9B5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.webp`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
