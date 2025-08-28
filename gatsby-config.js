/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Purificadora Aqua Ultra Plus Tampico`,
    description: 'Aqua Ultra Plus es una purificadora de agua potable con más de 30 años de servicio en Tampico, Tamaulipas. Haz tu pedido al (833) 314-0412.',
    siteUrl: `https://aquaultraplus.com`,
    image: '/Aqua-Logo.png'
  },
  plugins: [
    'gatsby-plugin-smoothscroll', 
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
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
