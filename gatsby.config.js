module.exports = {
  siteMetadata: {
    title: '',
    author: '',
    description: '',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '',
        short_name: '',
        start_url: '/',
        background_color: '',
        theme_color: '',
        display: 'minimal-ui',
        icon: '',
      },
    },
    `gatsby-plugin-preact`,
    'gatsby-plugin-hooked-head',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        defer: true,
      },
    },
    'gatsby-plugin-offline',
  ],
}
