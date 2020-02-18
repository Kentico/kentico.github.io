require('@babel/polyfill');

require("dotenv").config({
  KONTENT_PREVIEW_API_KEY: `.env.${process.env.KONTENT_PREVIEW_API_KEY}`,
})

module.exports = {
  siteMetadata: {
    title: 'Kentico GitHub Community',
    description: 'A gateway to the world of open-source at Kentico.',
    ogtitle: 'Kentico GitHub Community Home',
    siteurl: 'https://kentico.github.io'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GitHub Community',
        short_name: 'GitHub Community',
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
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/assets-us-01.kc-usercontent.com\//,
            handler: 'staleWhileRevalidate',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              },
              cacheName: 'kc-assets-data'
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: 'staleWhileRevalidate',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              },
              cacheName: 'google-fonts-stylesheets'
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'cacheFirst',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              },
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxAgeSeconds: 60 * 60,
                maxEntries: 30
              }
            }
          },
          {
            urlPattern: /^https:\/\/kentico.github.io/,
            handler: 'networkFirst',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              },
              cacheName: 'local-assets'
            }
          },
          {
            urlPattern: /^https:\/\/avatars[0-9]+.githubusercontent.com\//,
            handler: 'staleWhileRevalidate',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              },
              cacheName: 'github-assets-webfonts',
              expiration: {
                maxAgeSeconds: 60 * 60,
                maxEntries: 30
              }
            }
          }
        ]
      }
    },
    'gatsby-plugin-eslint', // https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/
    {
      resolve: '@kentico/gatsby-source-kontent',
      options: {
        deliveryClientConfig: {
          projectId: '1bb2313f-2550-0025-06d9-f3e5065607c0',
          previewApiKey: process.env.KONTENT_PREVIEW_API_KEY,
          globalQueryConfig: {
            usePreviewMode: process.env.KONTENT_PREVIEW_API_KEY ? true : false,
          },
          typeResolvers: []
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
