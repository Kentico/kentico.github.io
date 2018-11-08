import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ResponsiveMenu from 'react-responsive-navbar';

import HeadingSection from './headingSection';
import Section from './section';
import Footer from './footer';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPersona: 'developer'
    }
  }

  changePersona = (newPersona) => {
    this.setState({
      currentPersona: newPersona
    });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
        query GetLanguagePageData {
          allKenticoCloudItemSectionsPage {
            edges {
              node {
                top_menu {
                  text {
                    text
                  }
                  url {
                    text
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
                personas {
                  system {
                    codename
                  }
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
                  section_info__persona {
                    system {
                      codename
                    }
                  }
                  section_info__background_image {
                    assets {
                      url
                    }
                  }
                  icons {
                    system {
                      codename
                    }
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
                    persona {
                      system {
                        codename
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
                  side_text {
                    value
                  }
                  platform_selector {
                    name {
                      value
                    }
                    codename {
                      value
                    }
                  }
                  steps_label {
                    value
                  }
                  steps {
                    text {
                      value
                    }
                    persona {
                      system {
                        codename
                      }
                    }
                  }
                  issues_label {
                    value
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
                  icon {
                    assets {
                      name
                      url
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
        `}
        render={(data) => {
          const node = data.allKenticoCloudItemSectionsPage.edges[0].node;
          const currentPersona = this.state.currentPersona;
          const sections = node.sections.map((section, index) => (
            <Section
              key={index}
              data={section}
              personas={node.personas}
              platforms={node.platforms}
              currentPersona={currentPersona}
              changePersona={this.changePersona} />
          ));

          const hamburgerButton = <div style={{
            background: `url(${node.backgrounds.assets[1].url}) center center no-repeat`,
            position: 'absolute',
            width: '55px',
            height: '55px',
            padding: '15px',
            right: '0',
            top: '0',
            zIndex: '500'
          }}>
          </div>;

          const menuItems = node.top_menu.map((menuItem, index) =>
            <li key={index}><a href={menuItem.url.text}>{menuItem.text.text}</a></li>);

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
    );
  }
}

export default LandingPage
