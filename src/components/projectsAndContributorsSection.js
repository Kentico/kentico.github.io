import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
      }
    }
  }

  getCountLabel = (iconCodename) => {
    switch (iconCodename) {
      case 'number_of_opensource_projects':
        return this.state.opensourProjects.loading ? 'N/A' : this.state.opensourProjects.count;
      case 'merged_pull_requests':
        return this.state.mergerdPullRequest.loading ? 'N/A' : this.state.mergerdPullRequest.count;
      case 'different_contributors':
        return this.state.differentContributors.loading ? 'N/A' : this.state.differentContributors.count;
      default:
        return 'N/A';
    }
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
      </section>
    );
  }
}



ProjectsAndContributorsSection.propTypes = {
  data: PropTypes.shape({
    section_info__title: PropTypes.object,
    section_info__subtitle: PropTypes.object,
    section_info__background_image: PropTypes.object,
    icons: PropTypes.array
  }),
};

export default ProjectsAndContributorsSection;