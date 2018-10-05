import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header';

import UnderConstruction from '../images/under-construction.gif'

const LandingPage = () => (
  <StaticQuery
    query={graphql`
    query GetLanguagePageData{
      allKenticoCloudItemSectionsPage{
        edges {
          node {
            title{
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
            personas{
              name{
                text
              }
            }
            sections{
              section_info__title {
                text
              }
              section_info__subtitle {
                text
              }
              system {
                name
                type
                id
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
        <div
          key={section.system.id}
          style={{
            background: index % 2 ? '#3D5182' : '#5B7BC1',
            padding: '3em 0',
            textAlign: 'center'
          }}>
          <h1>{section.section_info__title.text}</h1>
          <h2>{section.section_info__subtitle.text}</h2>
        </div>
      ));
      return (
        <>
          <Header />
          <div
            style={{
              padding: '1em',
              textAlign: 'center'
            }}>
            <h1>{node.title.text}</h1>
            <h2>{node.subtitle.text}</h2>
            <p>The site is under construction :-)</p>
            <img src={UnderConstruction} alf="Under construction" />
            <p> This state is temporary, we promise! your Developer Community Team</p>
            <p><strong>#ICODETHEREFOREIAM</strong></p>
          </div>
          {sections}
          <div
            style={{
              padding: '1em',
              textAlign: 'center',
            }}>
            <div style={{ width: '30%', display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: node.footer_left_column.value }}></div>
            <div style={{ width: '30%', display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: node.footer_center_column.value }}></div>
            <div style={{ width: '30%', display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: node.footer_right_column.value }}></div>
            <div style={{ textAlign: 'center' }}>{node.footer_bottom_text.text}</div>
          </div>
        </>
      )
    }}
  />
)

export default LandingPage
