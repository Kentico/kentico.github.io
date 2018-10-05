import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => (
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
            { name: 'description', content: 'Official landing page for developer community in Kentico' },
            { name: 'keywords', content: 'developer, community, kentico, kenticocloud, headless, cms' },
          ]}
        >
          <html lang="en" />
        </Helmet>
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0',
              paddingTop: 0,
              backgroundColor: '#1D2740',
              color: '#FFFFFF'
            }}
          >
            {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
