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
            value {
              ... on kontent_item_text_link {
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
            value {
              ... on kontent_item_projects_and_contributors_section {
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
                    value {
                      ... on kontent_item_icon {
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
              ... on kontent_item_task_list_section {
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
                    value {
                      ... on kontent_item_step {
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
                    value {
                      ... on kontent_item_label {
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
              ... on kontent_item_icons_section {
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
                    value {
                      ... on kontent_item_icon {
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
              ... on kontent_item_banner_section {
                system {
                  id
                  codename
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
                  section_info__background_color {
                    value
                  }
                  url_text {
                    value
                  }
                  url_link {
                    value
                  }
                  main_text {
                    value
                  }
                  side_text {
                    value
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
            value {
              ... on kontent_item_icon {
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
      const sections = node.elements.sections.value.map((section, index) => (
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

      const menuItems = node.elements.top_menu.value.map((menuItem, index) =>
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
