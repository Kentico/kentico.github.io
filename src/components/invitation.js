import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  invitationCallbackUrl,
  invitationClientId,
  invitationScope
} from '../utils/config.json';

import "./invitation.scss";

class Invitation extends Component {
  render() {

    const invitationRequestUrl = 
      `https://github.com/login/oauth/authorize?client_id=${invitationClientId}&scope=${invitationScope}&redirect_uri=${invitationCallbackUrl}`;

    return (
      <div
        className="invitation"
        style={{
          background: `url("${this.props.backgroundUrl}")
         center 
         bottom 
         no-repeat
         rgb(28, 38, 63)`
        }
        }>
        <div className="organization-logo">
          <a href={this.props.organizationUrl}>
            <img alt="Organization logo" src={this.props.organizationLogoUrl} />
          </a>
        </div>
        <h1>{this.props.invitationText}</h1>
        <a className="btn" href={invitationRequestUrl}>{this.props.confirmationButtonText}</a>
      </div >
    );
  }
}

Invitation.propTypes = {
  organization: PropTypes.string,
  invitationText: PropTypes.string,
  confirmationButtonText: PropTypes.string,
  organizationLogoUrl: PropTypes.string,
  organizationUrl: PropTypes.string,
  backgroundUrl: PropTypes.string,
};

export default Invitation;