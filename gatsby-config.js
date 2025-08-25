/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aqua Ultra Plus`,
    siteUrl: `https://aquaultraplus.com`,
  },
  plugins: [
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aqua Ultra Plus`,
        short_name: `Aqua Ultra Plus`,
        start_url: `/`,
        icon: `src/images/favicon/favicon-16x16.png`
      },
    },
  ],
}
