import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./invitation.scss";

class Invitation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

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
        }}>
        <div className="organization-logo">
          <a href={this.props.organizationUrl}>
            <img alt="Organization logo" src={this.props.organizationLogoUrl} />
          </a>
        </div>
        <div className="form">
          <h1>{this.props.invitationText}</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              {this.props.userInputLabelText}
            </label>
            <input type="text" name="github-username" />
            <input type="submit" value={this.props.confirmationButtonText} />
          </form>
        </div>

      </div>
    );
  }
}

Invitation.propTypes = {
  organization: PropTypes.string,
  invitationText: PropTypes.string,
  userInputLabelText: PropTypes.string,
  confirmationButtonText: PropTypes.string,
  organizationLogoUrl: PropTypes.string,
  organizationUrl: PropTypes.string,
  backgroundUrl: PropTypes.string,
};

export default Invitation;