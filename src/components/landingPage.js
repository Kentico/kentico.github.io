import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ResponsiveMenu from 'react-responsive-navbar';

import HeadingSection from './headingSection';
import Section from './section';
import Footer from './footer';

const landingPage = () => (
  <StaticQuery
    query={graphql`
{
  allKenticoCloudItemSectionsPage {
    edges {
      node {
        elements {
          top_menu {
            elements {
              text {
                text
              }
              url {
                text
              }
            }
          }
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
          sections {
            ... on Node {
              ... on KenticoCloudItemBannerSection {
                system {
                  id
                  type
                }
                elements {
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
                  url_text {
                    text
                  }
                  url_link {
                    text
                  }
                  main_text {
                    value
                  }
                  side_text {
                    value
                  }
                }
              }
              ... on KenticoCloudItemProjectsAndContributorsSection {
                system {
                  id
                  type
                }
                elements {
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
                    ... on Node {
                      ... on KenticoCloudItemIcon {
                        system {
                          codename
                        }
                        elements {
                          title {
                            text
                          }
                          icon {
                            assets {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on KenticoCloudItemTaskListSection {
                system {
                  id
                  type
                }
                elements {
                  section_info__title {
                    text
                  }
                  section_info__background_image {
                    assets {
                      url
                    }
                  }
                  steps {
                    ... on Node {
                      ... on KenticoCloudItemStep {
                        system {
                          id
                        }
                        elements {
                          text {
                            value
                          }
                        }
                      }
                    }
                  }
                  platform_selector {
                    ... on Node {
                      ... on KenticoCloudItemLabel {
                        elements {
                          name {
                            value
                          }
                          codename {
                            value
                          }
                          detail_url {
                            text
                          }
                        }
                      }
                    }
                  }
                  issues_label {
                    value
                  }
                  steps_label {
                    value
                  }
                }
              }
              ... on KenticoCloudItemIconsSection {
                system {
                  id
                  type
                }
                elements {
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
                    ... on Node {
                      ... on KenticoCloudItemIcon {
                        system {
                          codename
                        }
                        elements {
                          title {
                            text
                          }
                          subtitle {
                            text
                          }
                          icon {
                            assets {
                              url
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on KenticoCloudItemStackoverflowSection {
                system {
                  id
                  type
                }
                elements {
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
                  cta__text {
                    text
                  }
                  cta__url {
                    text
                  }
                }
              }
            }
          }
          backgrounds {
            assets {
              url
            }
          }
          platforms {
            system {
              codename
            }
            elements {
              icon {
                assets {
                  name
                  url
                }
              }
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
}
`}
    render={(data) => {
      const node = data.allKenticoCloudItemSectionsPage.edges[0].node;
      const sections = node.elements.sections.map((section, index) => (
        <Section
          key={index}
          data={section}
          platforms={node.elements.platforms} />
      ));

      const hamburgerButton = <div style={{
        background: `url(${node.elements.backgrounds.assets[1].url}) center center no-repeat`,
        position: 'absolute',
        width: '55px',
        height: '55px',
        padding: '15px',
        right: '0',
        top: '0',
        zIndex: '500'
      }}>
      </div>;

      const menuItems = node.elements.top_menu.map((menuItem, index) =>
        <li key={index}><a href={menuItem.elements.url.text}>{menuItem.elements.text.text}</a></li>);

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
                {menuItems}
              </ul>
            }
          />
          <HeadingSection
            title={node.elements.title.text}
            subtitle={node.elements.subtitle.text}
            ctaText={node.elements.cta__text.text}
            ctaUrl={node.elements.cta__url.text}
            logo={node.elements.logo.assets[0]}
            backgroundImage={node.elements.background_image.assets[0]} />
          {sections}
          <Footer data={{
            footer_left_column: node.elements.footer_left_column,
            footer_center_column: node.elements.footer_center_column,
            footer_right_column: node.elements.footer_right_column,
            footer_bottom_text: node.elements.footer_bottom_text,
            backgrounds: node.elements.backgrounds.assets
          }} />
        </>
      )
    }}
  />
);

export default landingPage
