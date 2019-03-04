import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loaders'
import SVG from 'react-inlinesvg';
import linkIcon from '../images/link.svg';

import { getAllGithubData } from '../utils/gitHubDataLoader';


class ProjectsAndContributorsSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opensourceProjects: {
        loading: true,
        count: 0
      },
      mergedPullRequests: {
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

  dataLoaded = (error, result) => {
    if (!error) {
      this.setState({
        opensourceProjects: {
          loading: false,
          count: result.entries.filter(item => item.RowKey['_'] === "openSourceProjectCount")[0].value['_']
        },
        mergedPullRequests: {
          loading: false,
          count: result.entries.filter(item => item.RowKey['_'] === "mergePullRequestsCount")[0].value['_']
        },
        differentContributors: {
          loading: false,
          count: result.entries.filter(item => item.RowKey['_'] === "contributorsCount")[0].value['_']
        },
        repositories: {
          loading: false,
          data: JSON.parse(result.entries.filter(item => item.RowKey['_'] === "topThreeStarredRepos")[0].value['_'])
        },
        contributors: {
          loading: false,
          data: JSON.parse(result.entries.filter(item => item.RowKey['_'] === "topThreeContributors")[0].value['_'])
        }
      });
    }
    else {
      this.setState({
        opensourceProjects: {
          loading: false,
          count: 'N/A'
        },
        mergedPullRequests: {
          loading: false,
          count: 'N/A'
        },
        differentContributors: {
          loading: false,
          count: 'N/A'
        },
        repositories: {
          loading: false,
          data: []
        },
        contributors: {
          loading: false,
          data: []
        }
      });
    }
  }

  componentDidMount() {
    getAllGithubData(this.dataLoaded);
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
        return this.state.opensourceProjects.loading ? loader : this.state.opensourceProjects.count;
      case 'merged_pull_requests':
        return this.state.mergedPullRequests.loading ? loader : this.state.mergedPullRequests.count;
      case 'different_contributors':
        return this.state.differentContributors.loading ? loader : this.state.differentContributors.count;
      default:
        return 'N/A';
    }
  }

  getIconUrlForPlatform = (language) => (
    this.props.platforms
      .filter(platform =>
        platform.system.codename === language)[0].elements.icon.assets[0].url
  )

  getIconNameForPlatform = (language) => (
    this.props.platforms
      .filter(platform =>
        platform.system.codename === language)[0].elements.icon.assets[0].name
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
      case 'TypeScript': {
        platformCodename = 'typescript_8ffd07f'
        break;
      }
    }

    return <img src={this.getIconUrlForPlatform(platformCodename)} alt={this.getIconNameForPlatform(platformCodename)} />;
  }

  getIconUrl = (iconCodename) => {
    switch (iconCodename) {
      case 'number_of_opensource_projects':
      case 'different_contributors':
        return "https://github.com/Kentico?utf8=%E2%9C%93&q=&type=public&language=";
      case 'merged_pull_requests':
        return "https://github.com/pulls?q=org%3AKentico+is%3Apr+is%3Amerged+sort%3Acreated-desc";
      default:
        return '#';
    }
  }

  render() {
    const elements = this.props.data.elements;
    const icons = elements.icons.map(({system, elements}, index) => {
      const countLabel = this.getCountLabel(system.codename);
      return (
        <div className="box-33" key={index}>
          <a href={this.getIconUrl(system.codename)}>
            <SVG
              src={elements.icon.assets[0].url}
              preloader={<Loader
                type="ball-scale-ripple-multiple"
                active={true}
                style={{
                  transform: 'scale(0.5)',
                  width: '40px',
                  height: '27px'
                }} />}>
              <img src={elements.icon.assets[0].url} alt="" />
            </SVG>
            <strong>{countLabel}</strong>&nbsp;{elements.title.text}
            <SVG src={linkIcon} className="link-icon">
              <img src={linkIcon} alt="link icon" />
            </SVG>
          </a>
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
                {repo.forks} forks
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
              <strong>{contributor.contributorInfo.login}</strong>
              {contributor.totalContributions} contributions
            </p>
            <div className="clear"></div>
          </a>
        </div>));


    return (
      <section
        className="fifth" id="our-projects" style={{
          background: `#2C3753 url(${elements.section_info__background_image.assets[0].url}) bottom center no-repeat`
        }}>
        <div className="row-flex">
          <div className="box-100">
            <h2>{elements.section_info__title.text}</h2>
            <h3>{elements.section_info__subtitle.text}</h3>
          </div>
        </div>
        <div className="row-flex stats">
          {icons}
        </div>
        <div className="row-flex">
          <div className="box-50">
            {repositories && repositories.length > 0 ? repositories : "N/A"}
          </div>
          <div className="box-50">
            {contributors && contributors.length > 0 ? contributors : "N/A"}
          </div>
        </div>
      </section >
    );
  }
}



ProjectsAndContributorsSection.propTypes = {
  data: PropTypes.shape({
    elements: PropTypes.shape({
      section_info__title: PropTypes.object,
      section_info__subtitle: PropTypes.object,
      section_info__background_image: PropTypes.object,
      icons: PropTypes.array,
    })
  }),
  platforms: PropTypes.array,
};

export default ProjectsAndContributorsSection;