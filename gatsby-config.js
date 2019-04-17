module.exports = {
  siteMetadata: {
    title: `Php Inspections (EA Ultimate)`,
    description: `An Ultimate Static Code Analyzer for PhpStorm.`,
    author: `@kalessil`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
