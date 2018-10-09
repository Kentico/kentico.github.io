import React from 'react'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'

import LandingPage from '../components/landingPage';

import './index.scss';

const IndexPage = () => (
    <StaticQuery
        query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
        render={data => (
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: 'Official site for Kentico developer community. General guidepost for people who are interested in the open-source, especially around Kentico open-source projects.' },
                        { name: 'keywords', content: 'developer, community, kentico, kenticocloud, headless, cms, open-source' },
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
