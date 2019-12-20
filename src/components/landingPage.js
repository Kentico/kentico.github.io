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
  allKontentItemSectionsPage {
    edges {
      node {
        elements {
          top_menu {
            linked_items {
              ... on KontentItemTextLink {
                elements {
                  text {
                    value
                  }
                  url {
                    value
                  }
                }
              }
              id
            }
          }
          title {
            value
          }
          subtitle {
            value
          }
          cta__text {
            value
          }
          cta__url {
            value
          }
          logo {
            value {
              url
            }
          }
          background_image {
            value {
              url
            }
          }
          sections {
            linked_items {
              ... on KontentItemProjectsAndContributorsSection {
                system {
                  id
                  type
                }
                elements {
                  section_info__title {
                    value
                  }
                  section_info__subtitle {
                    value
                  }
                  section_info__background_image {
                    value {
                      url
                    }
                  }
                  icons {
                    linked_items {
                      ... on KontentItemIcon {
                        system {
                          codename
                        }
                        elements {
                          title {
                            value
                          }
                          icon {
                            value {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on KontentItemTaskListSection {
                system {
                  id
                  type
                }
                elements {
                  section_info__title {
                    value
                  }
                  section_info__background_image {
                    value {
                      url
                    }
                  }
                  steps {
                    linked_items {
                      ... on KontentItemStep {
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
                    linked_items {
                      ... on KontentItemLabel {
                        elements {
                          name {
                            value
                          }
                          codename {
                            value
                          }
                          detail_url {
                            value
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
              ... on KontentItemIconsSection {
                system {
                  id
                  type
                }
                elements {
                  section_info__title {
                    value
                  }
                  section_info__subtitle {
                    value
                  }
                  section_info__background_image {
                    value {
                      url
                    }
                  }
                  icons {
                    linked_items {
                      ... on KontentItemIcon {
                        system {
                          codename
                        }
                        elements {
                          title {
                            value
                          }
                          subtitle {
                            value
                          }
                          icon {
                            value {
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
            }
          }
          backgrounds {
            value {
              url
            }
          }
          platforms {
            linked_items {
              ... on KontentItemIcon {
                system {
                  codename
                }
                elements {
                  icon {
                    value {
                      name
                      url
                    }
                  }
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
            value
          }
        }
      }
    }
  }
}
`}
    render={(data) => {
      const node = data.allKontentItemSectionsPage.edges[0].node;
      const sections = node.elements.sections.linked_items.map((section, index) => (
        <Section
          key={index}
          data={section}
          platforms={node.elements.platforms} />
      ));

      const hamburgerButton = <div style={{
        background: `url(${node.elements.backgrounds.value[1].url}) center center no-repeat`,
        position: 'absolute',
        width: '55px',
        height: '55px',
        padding: '15px',
        right: '0',
        top: '0',
        zIndex: '500'
      }}>
      </div>;

      const menuItems = node.elements.top_menu.linked_items.map((menuItem, index) =>
        <li key={index}><a href={menuItem.elements.url.value}>{menuItem.elements.text.value}</a></li>);

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
            title={node.elements.title.value}
            subtitle={node.elements.subtitle.value}
            ctaText={node.elements.cta__text.value}
            ctaUrl={node.elements.cta__url.value}
            logo={node.elements.logo.value[0]}
            backgroundImage={node.elements.background_image.value[0]} />
          {sections}
          <Footer data={{
            footer_left_column: node.elements.footer_left_column,
            footer_center_column: node.elements.footer_center_column,
            footer_right_column: node.elements.footer_right_column,
            footer_bottom_text: node.elements.footer_bottom_text,
            backgrounds: node.elements.backgrounds.value
          }} />
        </>
      )
    }}
  />
);

export default landingPage
