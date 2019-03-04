import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loaders';
import { Parser as ReactParser } from 'html-to-react';
import SVG from 'react-inlinesvg';

import linkIcon from '../images/link.svg';
import { getAllGithubData } from '../utils/gitHubDataLoader';

class GithubIssuesListSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platformSelection: 'all',
      issues: [],
      contentTasks: [],
      issuesLoaded: false
    }
  }

  componentDidMount() {
    getAllGithubData(this.dataLoaded);
  }

  componentWillUnmount() {
    this.issuesSubscription.forEach(subscription =>
      subscription.cancelFetch());
  }

  dataLoaded = (error, result) => {
    if (!error) {
      const issues = result
        .entries
        .filter(item =>
          item.RowKey['_'] === "openedGroomedIssuesByPlatform");
      const contentTasks = result
        .entries
        .filter(item =>
          item.RowKey['_'] === "contentBacklogThreeTodoCards");

      this.setState({
        issues: issues && issues[0] && JSON.parse(issues[0].value['_']),
        contentTasks: contentTasks && contentTasks[0] && JSON.parse(contentTasks[0].value['_']),
        issuesLoaded: true
      });
    }
    else {
      this.setState({
        issues: [],
        contentTasks: [],
        issuesLoaded: true
      });
    }
  }

  platformChanged = (event) => {
    this.setState({ platformSelection: event.target.value });
  }

  render() {
    const elements = this.props.data.elements;
    const platforms = elements.platform_selector.map(platform =>
      <option key={platform.elements.codename.value} value={platform.elements.codename.value}>{platform.elements.name.value}</option>);

    const steps = elements.steps
      .filter(step => step.elements.persona[0].system.codename === this.props.currentPersona)
      .map((step, index) =>
        <div key={index}>
          <span>{("0" + (index + 1)).slice(-2)}/</span>
          <>{new ReactParser().parse(step.elements.text.value)}</>
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
    let issues;

    if (this.state.issuesLoaded) {
      const currentIssues =
        this.props.currentPersona === 'developer' ? this.state.issues[this.state.platformSelection] :
          this.props.currentPersona === 'blogger' ? this.state.contentTasks : []
            || [];
      if (!currentIssues || currentIssues.length === 0) {
        issues = <li>No issues</li>
      }
      else {
        issues = currentIssues.map(issue =>
          <li key={issue.id}>
            <a href={issue.html_url}>
              <img src={issue.user.avatar_url} />
              <span>{issue.title}</span>
              <p>{issue.repository_url.match(/https:\/\/api\.github\.com\/repos\/(.*)/)[1]}</p>
            </a>
          </li >);
      }
    }

    const platformSelector = this.props.currentPersona === 'developer' && (<select value={this.state.platformSelection} onChange={this.platformChanged}>
      <option value="all" disabled="" hidden="">All</option>
      {platforms}
    </select>);

    const selectedPlatforms = elements.platform_selector.filter(({ elements }) => elements.codename.value === this.state.platformSelection);

    const selectedPlatformLink =
      this.props.currentPersona === 'blogger'
        ? <a
          className="btn"
          href="https://github.com/orgs/Kentico/projects/8"
          target="_blank"
          rel="noopener noreferrer">
          Public backlog
        </a>
        : selectedPlatforms.length > 0
        && selectedPlatforms[0].elements.detail_url.text
        && <a
          className="btn"
          href={selectedPlatforms[0].elements.detail_url.text}
          target="_blank"
          rel="noopener noreferrer">
          Public backlog
        </a>;

    const issuesTitle = this.props.currentPersona === 'developer'
      ? <a href={`https://github.com/issues?q=org%3AKentico+is%3Aissue+is%3Aopen+user%3AKentico+label%3Agroomed+language%3A${this.state.platformSelection}`}>
        {elements.issues_label.value}
        <SVG src={linkIcon} >
          <img src={linkIcon} alt="link icon" />
        </SVG>
      </a> : elements.issues_label.value;
    const issueWrapper = <div className="box-50 issues">
      <h3>
        {issuesTitle}
      </h3>
      {this.state.issuesLoaded
        ? (<div>
          <ul>
            {issues}
          </ul>
          {selectedPlatformLink}
        </div>)
        : issuesLoader}
    </div >

    return (
      <section className="third" id="task-list" style={{
        background: `#1C263F url(${elements.section_info__background_image.assets[0].url}) bottom center no-repeat`
      }}>
        <div className="row-flex">
          <h2>
            {elements.section_info__title.text}
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
              {elements.steps_label.value}
            </h3>
            {steps}
          </div>
          {['developer', 'blogger'].includes(this.props.currentPersona) && issueWrapper}
        </div>
      </section >
    );
  }
}

GithubIssuesListSection.propTypes = {
  data: PropTypes.shape({
    elements: PropTypes.shape({
      section_info__title: PropTypes.object,
      section_info__subtitle: PropTypes.object,
      section_info__background_image: PropTypes.object,
      platform_selector_nodes: PropTypes.array,
      steps_label: PropTypes.object,
      steps: PropTypes.array,
      issues_label: PropTypes.object,
    })
  }),
  currentPersona: PropTypes.string.isRequired
};

export default GithubIssuesListSection;