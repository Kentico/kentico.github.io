import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

import Invitation from '../components/invitation';

import './join.scss';

const InvitationPage = () => (
  <StaticQuery
    query={graphql`
{
  kontentItemInvitationPage(system: {codename: {eq: "kentico_invitation_page"}}) {
    elements {
      invitation_title {
        value
      }
      confirmation_button_text {
        value
      }
      organization_logo {
        value {
          ... on kontent_item_image_link {
            elements {
              image {
                value {
                  name
                  url
                }
              }
              image_url {
                value
              }
            }
          }
        }
      }
      background {
        value {
          name
          url
        }
      }
    }
  }
}
`}
    render={(data) => {
      const {
        kontentItemInvitationPage: {
          elements: {
            invitation_title: {
              value: invitationText
            },
            confirmation_button_text: {
              value: confirmationButtonText
            },
            organization_logo: {
              value: organization_logos
            },
            background: {
              value: backgroundAssets
            }
          }
        }
      } = data;
      const {
        elements: {
          image: {
            value: organizationLogos
          },
          image_url: {
            value: organizationUrl
          }
        }
      } = organization_logos[0];

      const organization = organizationUrl.split('/').pop();

      return (
        <>
          <Invitation
            organization={organization}
            invitationText={invitationText}
            confirmationButtonText={confirmationButtonText}
            organizationLogoUrl={organizationLogos[0].url}
            organizationUrl={organizationUrl}
            backgroundUrl={backgroundAssets[0].url}
          />
        </>
      );
    }}
  />
);

export default InvitationPage;