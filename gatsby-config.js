require('@babel/polyfill');

module.exports = {
  siteMetadata: {
    title: 'Developer Community',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
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
