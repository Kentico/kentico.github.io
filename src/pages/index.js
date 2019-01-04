import React from 'react'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'

import LandingPage from '../components/landingPage';

import './index.scss';
import ogImage from '../images/dc-og-image.png'

const IndexPage = () => (
    <StaticQuery
        query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              ogtitle
              siteurl
            }
          }
        }
      `}
        render={({
            site: {
                siteMetadata: {
                    title,
                    description,
                    ogtitle,
                    siteurl
                },
            },
        }) => (
                <>
                    <Helmet
                        title={title}
                        meta={[
                            { name: 'description', content: description },
                            { name: 'keywords', content: 'developer, community, kentico, kenticocloud, headless, cms, open-source' },
                            { name: 'og:title', content: ogtitle },
                            { name: 'og:type', content: 'website' },
                            { name: 'og:url', content: siteurl },
                            { name: 'og:image', content: `${siteurl}${ogImage}` },
                            { name: 'og:description', content: description },
                            { name: 'og:image:width', content: '1200' },
                            { name: 'og:image:height', content: '630' },
                            { name: 'twitter:card', content: 'summary_large_image' },
                            { name: 'twitter:title', content: ogtitle },
                            { name: 'twitter:description', content: description },
                            { name: 'twitter:image', content: `${siteurl}${ogImage}` }
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>
                    <LandingPage />
                </>
            )}
    />
)

export default IndexPage
