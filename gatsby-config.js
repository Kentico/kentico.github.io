require('@babel/polyfill');

module.exports = {
  siteMetadata: {
    title: 'Developer Community',
    description: 'A gateway to the world of open-source at Kentico.',
    ogtitle: 'Kentico Developer Community Home',
    siteurl: 'https://kentico.github.io'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Developer Community',
        short_name: 'Developer Community',
        start_url: '/',
        background_color: '#1C263F',
        theme_color: '#1C263F',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-eslint', // https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/
    {
      resolve: 'gatsby-source-kentico-cloud',
      options: {
        deliveryClientConfig: {
          projectId: '1bb2313f-2550-0025-06d9-f3e5065607c0',
        },
        languageCodenames: [
          "default"
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-69014260-7'
      }
    }
  ],
}
