require('@babel/polyfill');

module.exports = {
  siteMetadata: {
    title: 'Developer Community',
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
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        runtimeCaching: [{
          // To match cross-origin requests, use a RegExp that matches
          // the start of the origin:
          urlPattern: /^https:\/\/api\.github\.com\//,
          handler: 'staleWhileRevalidate',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    },
    'gatsby-plugin-eslint', // https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/
    {
      resolve: 'gatsby-source-kentico-cloud',
      options: {
        kcProjectId: '1bb2313f-2550-0025-06d9-f3e5065607c0',
        kcLanguageCodenames: [
          "default"
        ]
      }
    }
  ],
}
