import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ResponsiveMenu from 'react-responsive-navbar';

import HeadingSection from './headingSection';
import Section from './section';
import Footer from './footer';

const LandingPage = () => (
  <StaticQuery
    query={graphql`
    query GetLanguagePageData {
      allKenticoCloudItemSectionsPage {
        edges {
          node {
            title {
              text
            }
            subtitle {
              text
            }
            cta__text {
              text
            }
            cta__url {
              text
            }
            logo {
              assets {
                url
              }
            }
            background_image {
              assets {
                url
              }
            }
            personas {
              name {
                text
              }
            }
            sections {
              system {
                id
                type
              }
              section_info__title {
                text
              }
              section_info__subtitle {
                text
              }
              section_info__background_image {
                assets {
                  url
                }
              }
              icons {
                title {
                  text
                }
                subtitle {
                  text
                }
                icon {
                  assets {
                    url
                  }
                }
              }
              url_link {
                text
              }
              url_text {
                text
              }
              icon {
                assets {
                  url
                }
              }
              main_text {
                value
              }
            }
            backgrounds {
              assets {
                url
              }
            }
            footer_left_column {
              value
            }
            footer_center_column {
              value
            }
            footer_right_column {
              value
            }
            footer_bottom_text {
              text
            }
          }
        }
      }
    }
    `}
    render={(data) => {
      const node = data.allKenticoCloudItemSectionsPage.edges[0].node;
      const sections = node.sections.map((section, index) => (
        <Section key={index} data={section} />
      ));

      const hamburgerButton = <div style={{
        background: `url(${node.backgrounds.assets[1].url}) center center no-repeat`,
        position: 'absolute',
        width: '55px', 
        height: '55px', 
        padding: '15px',
        right: '0', 
        top: '0',
        zIndex: '500'}}>
        </div>;

      return (
        <>
          <ResponsiveMenu
            menuOpenButton={hamburgerButton}
            menuCloseButton={hamburgerButton}
            largeMenuClassName="large-nav"
            smallMenuClassName="small-nav"
            changeMenuOn="750px"
            menu={
              <ul id="nav">
                <li><a href="#value-propositions">Value Propositions</a></li>
                <li><a href="#hacktoberfest">Hacktoberfest</a></li>
                <li><a href="#our-projects">Our Projects & Contributors</a></li>
              </ul>
            }
          />
          <HeadingSection
            title={node.title.text}
            subtitle={node.subtitle.text}
            ctaText={node.cta__text.text}
            ctaUrl={node.cta__url.text}
            logo={node.logo.assets[0]}
            backgroundImage={node.background_image.assets[0]} />
          {sections}
          <Footer data={{
            footer_left_column: node.footer_left_column,
            footer_center_column: node.footer_center_column,
            footer_right_column: node.footer_right_column,
            footer_bottom_text: node.footer_bottom_text,
            backgrounds: node.backgrounds.assets
          }} />
        </>
      )
    }}
  />
)

export default LandingPage
