import React from 'react'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'

import LandingPage from '../components/landingPage';

import './index.scss';
import ogImage from '../images/dc-ogimage.png'

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
                            { name: 'keywords', content: 'github, developer, community, kentico, kontent, headless, caas, cms, ems, open-source' },
                            { property: 'og:title', content: ogtitle },
                            { property: 'og:type', content: 'website' },
                            { property: 'og:url', content: siteurl },
                            { property: 'og:image', content: `${siteurl}${ogImage}` },
                            { property: 'og:description', content: description },
                            { property: 'og:image:width', content: '1200' },
                            { property: 'og:image:height', content: '630' },
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
