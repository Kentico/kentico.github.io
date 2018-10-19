import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeCancelable from 'makecancelable';
import Loader from 'react-loaders'

import {
  getKenticoOpenSourceProjectsCount,
  getKenticoMergedPullRequestCount,
  getKenticoContributorsCount,
  getKenticoCloudTopThreeStaredRepos,
  getKenticoTopThreeContributors
} from '../utils/gitHubDataLoader';


class ProjectsAndContributorsSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opensourProjects: {
        loading: true,
        count: 0
      },
      mergerdPullRequest: {
        loading: true,
        count: 0
      },
      differentContributors: {
        loading: true,
        count: 0
      },
      repositories: {
        loading: true,
        data: undefined
      },
      contributors: {
        loading: true,
        data: undefined
      }
    }
  }

  componentDidMount() {

    this.openSourceCountSubscription =
      makeCancelable(getKenticoOpenSourceProjectsCount()
        .then(count => this.setState({
          opensourProjects: {
            loading: false,
            count: count
          }
        })));


    this.mergedPullRequestsSubscription =
      makeCancelable(getKenticoMergedPullRequestCount()
        .then(count => this.setState({
          mergerdPullRequest: {
            loading: false,
            count: count
          }
        })));

    this.contributorsCountSubscription =
      makeCancelable(getKenticoContributorsCount()
        .then(count => this.setState({
          differentContributors: {
            loading: false,
            count: count
          }
        })));

    this.topThreeReposSubscription =
      makeCancelable(getKenticoCloudTopThreeStaredRepos()
        .then(repos => this.setState({
          repositories: {
            loading: false,
            data: repos
          }
        })));

    this.contributorsSubscription =
      makeCancelable(getKenticoTopThreeContributors()
        .then(contributors => this.setState({
          contributors: {
            loading: false,
            data: contributors
          }
        })));
  }

  componentWillUnmount() {
    this.openSourceCountSubscription.cancelFetch();
    this.mergedPullRequestsSubscription.cancelFetch();
    this.contributorsCountSubscription.cancelFetch();
    this.topThreeReposSubscription.cancelFetch();
    this.contributorsSubscription.cancelFetch();
  }

  getCountLabel = (iconCodename) => {
    const loader =
      <Loader
        type="ball-scale-ripple-multiple"
        active={true}
        style={{
          transform: 'scale(0.5)',
          width: '27px',
          height: '27px'
        }} />;

    switch (iconCodename) {
      case 'number_of_opensource_projects':
        return this.state.opensourProjects.loading ? loader : this.state.opensourProjects.count;
      case 'merged_pull_requests':
        return this.state.mergerdPullRequest.loading ? loader : this.state.mergerdPullRequest.count;
      case 'different_contributors':
        return this.state.differentContributors.loading ? loader : this.state.differentContributors.count;
      default:
        return 'N/A';
    }
  }

  getIconUrlForPlatform = (language) => (
    this.props.platforms
      .filter(platform =>
        platform.system.codename === language)[0].icon.assets[0].url
  )

  getIconNameForPlatform = (language) => (
    this.props.platforms
      .filter(platform =>
        platform.system.codename === language)[0].icon.assets[0].name
  )

  getPlatformIcon = (language) => {
    let platformCodename = 'default';
    switch (language) {
      case 'C#': {
        platformCodename = 'csharp';
        break;
      }
      case 'Java': {
        platformCodename = 'java_25fb270';
        break;
      }
      case 'Javascript':
      case 'CSS': {
        platformCodename = 'javascript';
        break;
      }
      case 'PHP': {
        platformCodename = 'php_426b4b3';
        break;
      }
      case 'HTML': {
        platformCodename = 'html';
        break;
      }
    }

    return <img src={this.getIconUrlForPlatform(platformCodename)} alt={this.getIconNameForPlatform(platformCodename)} />;
  }


  render() {
    const icons = this.props.data.icons.map((icon, index) => {
      const countLabel = this.getCountLabel(icon.system.codename);
      return (
        <div className="box-33" key={index}>
          <img src={icon.icon.assets[0].url} alt="" />
          <strong>{countLabel}</strong> {icon.title.text}
        </div>
      )
    });

    const repositories = this.state.repositories.loading ?
      <Loader type="ball-scale-ripple-multiple" active={true} style={{ transform: 'scale(0.5)', width: '27px', height: '324px' }} /> :
      this.state.repositories.data.map(repo => {
        const icon = this.getPlatformIcon(repo.language);
        return (
          <div key={repo.id} className="person">
            <a href={repo.html_url} className="icon-widget">
              {icon}
              <p>
                <strong>{repo.name}</strong>
                {repo.stargazers_count} stars<br />
                {repo.watchers_count} watchers
              </p>
              <div className="clear"></div>
            </a>
          </div>)
      });
      
      const contributors = this.state.contributors.loading ?
      <Loader type="ball-scale-ripple-multiple" active={true} style={{ transform: 'scale(0.5)', width: '27px', height: '324px' }} /> :
      this.state.contributors.data.map(contributor => (
        <div key={contributor.contributorInfo.login} className="person">
          <a className="icon-widget" href={contributor.contributorInfo.html_url}>
            <img src={contributor.contributorInfo.avatar_url} alt={`avatar of ${contributor.contributorInfo.login}`} />
            <p>
              <strong>{contributor.contributorInfo.login}</strong><br />
              {contributor.totalContributions} contributions
            </p>
            <div className="clear"></div>
          </a>
        </div>));


    return (
      <section
        className="fifth" id="our-projects" style={{
          background: `#2C3753 url(${this.props.data.section_info__background_image.assets[0].url}) bottom center no-repeat`
        }}>
        <div className="row-flex">
          <div className="box-100">
            <h2>{this.props.data.section_info__title.text}</h2>
            <h3>{this.props.data.section_info__subtitle.text}</h3>
          </div>
        </div>
        <div className="row-flex stats">
          {icons}
        </div>
        <div className="row-flex">
          <div className="box-50">
            {repositories}
          </div>
          <div className="box-50">
            {contributors}
          </div>
        </div>
      </section >
    );
  }
}



ProjectsAndContributorsSection.propTypes = {
  data: PropTypes.shape({
    section_info__title: PropTypes.object,
    section_info__subtitle: PropTypes.object,
    section_info__background_image: PropTypes.object,
    icons: PropTypes.array,
  }),
  platforms: PropTypes.array,
};

export default ProjectsAndContributorsSection;