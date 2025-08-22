/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aqua Ultra Plus`,
    siteUrl: `https://www.aquaultraplus.com`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Saira`,
            file: `https://fonts.googleapis.com/css2?family=Saira:wght@700&display=swap`,
          },
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
  ],
}
