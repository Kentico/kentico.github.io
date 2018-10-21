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
        width: '535px',
        height: '300px'
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
            </a>
          </li >);
      }
      issuesLoaded = true;
    }
    return (
      <section className="third" id="task-list" style={{
        background: `#582D40 url(${this.props.data.section_info__background_image.assets[0].url}) top center no-repeat`
      }}>
        <div className="row-flex">
          <h2>
            {this.props.data.section_info__title.text}
          </h2>
        </div>
        <div className="row-flex">
          <div className="box-100 buttons">
            <select value={this.state.platformSelection} onChange={this.platformChanged}>
              <option value="all" disabled="" hidden="">All</option>
              {platforms}
            </select>
          </div>
        </div>
        <div className="row-flex">
          <div className="box-50 steps">
            <h3>
              {this.props.data.steps_label.value}
            </h3>
            {steps}
          </div>
          <div className="box-50 issues">
            <h3>
              <a href={`https://github.com/Kentico?q=org:Kentico+type:issue+is:public+label:groomed+state:open+no:assignee+language:${this.state.platformSelection}&sort=updated&order=desc`}>
                {this.props.data.issues_label.value}
              </a>
            </h3>
            {issuesLoaded ? <ul>{issues}</ul> : issuesLoader}
          </div>
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
    issues_label: PropTypes.object
  }),
};

export default GithubIssuesListSection;