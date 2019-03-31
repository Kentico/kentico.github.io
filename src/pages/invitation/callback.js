import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { invitationUrl } from "../../utils/config.json";
import Axios from 'axios';

class InvitationCallback extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            message: `An error occured when sending invitation request ${JSON.stringify(err)}`
          })
        })
    }
  }


  render() {

    if (this.state.loading) {
      return <h1 style={{ color: "#000000" }}>LOADING</h1>;
    }
    
    if (this.state.error) {
      return <h1 style={{ color: "#FF0000" }}>Error</h1>;
    }

    return (
      <div style={{ color: "#000000" }}>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

InvitationCallback.propTypes = {
  location: PropTypes.object
}

export default InvitationCallback;