import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./invitation.scss";

class Invitation extends Component {
  render() {
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
        <a className="btn" href="https://github.com/login/oauth/authorize?client_id=74317bc4b4ff71a278b6&scope=read:user%20user:email&redirect_uri=https://localhost:8000/invitation/callback">{this.props.confirmationButtonText}</a>
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