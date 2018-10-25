import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loaders';
import makeCancelable from 'makecancelable';

import {
  getKenticoOpenedGroomedIssues
} from '../utils/gitHubDataLoader';

class GithubIssuesListSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platformSelection: 'all',
      issues: undefined
    }
  }

  componentDidMount() {
    this.issuesSubscription = [];
    this.issuesSubscription.push(
      makeCancelable(getKenticoOpenedGroomedIssues()
        .then(issues => this.setState({
          issues
        }))));
  }

  componentWillUnmount() {
    this.issuesSubscription.forEach(subscription =>
      subscription.cancelFetch());
  }


  platformChanged = (event) => {
    this.setState({ platformSelection: event.target.value });
    this.setState({
      issues: undefined
    });
    this.issuesSubscription.push(
      makeCancelable(getKenticoOpenedGroomedIssues(event.target.value)
        .then(issues => this.setState({
          issues
        }))));
  }

  render() {
    const platforms = this.props.data.platform_selector.map(platform =>
      <option key={platform.codename.value} value={platform.codename.value}>{platform.name.value}</option>);

    const steps = this.props.data.steps.map((step, index) =>
      <div key={index}>
        <span>{("0" + (index + 1)).slice(-2)}/</span>
        <p>{step.text.value}</p>
      </div>
    )

    const issuesLoader = <Loader
      type="ball-scale-ripple-multiple"
      active={true}
      style={{
        transform: 'scale(1)',
        width: '50%',
        height: '300px',
        float: 'right'
      }} />;
    let issuesLoaded = false;
    let issues;

    if (this.state.issues) {
      if (this.state.issues.length == 0) {
        issues = <li>No issues</li>
      }
      else {
        issues = this.state.issues.map(issue =>
          <li key={issue.id}>
            <a href={issue.html_url}>
              <img src={issue.user.avatar_url} />
              <span>{issue.title}</span>
              <p>{issue.repository_url.match(/https:\/\/api\.github\.com\/repos\/(.*)/)[1]}</p>
            </a>
          </li >);
      }
      issuesLoaded = true;
    }

    const platformSelector = (<select value={this.state.platformSelection} onChange={this.platformChanged}>
      <option value="all" disabled="" hidden="">All</option>
      {platforms}
    </select>);

    const issueWrapper = <div className="box-50 issues">
      <h3>
        <a href={`https://github.com/issues?q=org%3AKentico+is%3Aissue+is%3Aopen+user%3AKentico+label%3Agroomed+language%3A${this.state.platformSelection}`}>        
          {this.props.data.issues_label.value}
        </a>
      </h3>
      {issuesLoaded ? <ul>{issues}</ul> : issuesLoader}
    </div>
    
    if (this.props.currentPersona !== 'developer') {
      return null;
    }

    return (
      <section className="third" id="task-list" style={{
        background: `#1C263F url(${this.props.data.section_info__background_image.assets[0].url}) bottom center no-repeat`
      }}>
        <div className="row-flex">
          <h2>
            {this.props.data.section_info__title.text}
          </h2>
        </div>
        <div className="row-flex">
          <div className="box-100 buttons">
            {platformSelector}
          </div>
        </div>
        <div className="row-flex">
          <div className="box-50 steps">
            <h3>
              {this.props.data.steps_label.value}
            </h3>
            {steps}
          </div>
          {this.props.currentPersona === 'developer' && issueWrapper}
        </div>
      </section >
    );
  }
}

GithubIssuesListSection.propTypes = {
  data: PropTypes.shape({
    section_info__title: PropTypes.object,
    section_info__subtitle: PropTypes.object,
    section_info__background_image: PropTypes.object,
    platform_selector: PropTypes.array,
    steps_label: PropTypes.object,
    steps: PropTypes.array,
    issues_label: PropTypes.object,
  }),
  currentPersona: PropTypes.string.isRequired
};

export default GithubIssuesListSection;