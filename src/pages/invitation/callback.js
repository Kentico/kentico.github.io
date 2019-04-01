import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby'
import qs from 'qs';
import { invitationUrl } from "../../utils/config.json";
import Axios from 'axios';
import Loader from 'react-loaders';

import './callback.scss';

class InvitationCallback extends Component {
  constructor(props) {
    super(props);
    let initialState = {
      loading: true,
      error: false,
      message: ''
    }

    const code = qs.parse(props.location.search, { ignoreQueryPrefix: true }).code;

    if (code) {
      Axios.get(`${invitationUrl}?code=${code}`)
        .then(result => {
          this.setState({
            loading: false,
            message: result.data
          })
        })
        .catch(err => {
          this.setState({
            error: true,
            loading: false,
            message: `An error occurred when sending invitation request ${JSON.stringify(err)}`
          })
        })
    }
    else {
      initialState = {
        ...initialState,
        error: true,
        loading: false,
        message: `This page is used for invitation callback.`
      };
    }

    this.state = initialState;
  }


  render() {

    const navigation = (
      <ul>
        <li>
          <Link className="btn" to="/invitation">Go to Invitation page</Link>
        </li>
        <li>
          <Link className="btn" to="/">Go to Home page</Link>
        </li>
      </ul>
    );

    let content = (
      <div>
        <h1>Success</h1>
        <div>{this.state.message}</div>
        {navigation}
      </div>
    );


    if (this.state.loading) {
      content = (<>
        <Loader
          type="ball-scale-ripple-multiple"
          active={true}
          className="loader"
        />
        <div>
          <h1>Loading</h1>
        </div>
      </>
      );
    }

    if (this.state.error) {
      content = (
        <div className="error">
          <h1>Error</h1>
          <div className="message">{this.state.message}</div>
          {navigation}
        </div>
      );
    }

    return (

      <StaticQuery
        query={graphql`
{
  kenticoCloudItemInvitationPage(system: {codename: {eq: "kentico_invitation_page"}}) {
    elements{
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
              background: {
                assets: backgroundAssets
              }
            }
          }
        }) => {
          return (
            <div className="invitation-callback"
              style={{
                background: `url("${backgroundAssets[0].url}")
                  center 
                  bottom 
                  no-repeat
                  rgb(28, 38, 63)`
              }}>
              <div className="callback-content">
                {content}
              </div>
            </div>
          )
        }}
      />
    );
  }
}

InvitationCallback.propTypes = {
  location: PropTypes.object
}

export default InvitationCallback;