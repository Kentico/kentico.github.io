import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

import Invitation from '../components/invitation';


const InvitationPage = () => (
  <StaticQuery
    query={graphql`
{
  kenticoCloudItemInvitationPage(system: {codename: {eq: "kentico_invitation_page"}}) {
    elements {
      invitation_title {
        text
      }
      confirmation_button_text {
        text
      }
      organization_logo {
        ... on Node {
          ... on KenticoCloudItemImageLink {
            elements {
              image {
                assets {
                  name
                  url
                }
              }
              image_url {
                text
              }
            }
          }
        }
      }
      background {
        assets {
          name
          url
        }
      }
    }
  }
}
`}
    render={({
      kenticoCloudItemInvitationPage: {
        elements: {
          invitation_title: {
            text: invitationText
          },
          confirmation_button_text: {
            text: confirmationButtonText
          },
          organization_logo: organization_logos,
          background: {
            assets: backgroundAssets
          }
        }
      }
    }) => {
      const {
        elements: {
          image: {
            assets: organizationLogos
          },
          image_url: {
            text: organizationUrl
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