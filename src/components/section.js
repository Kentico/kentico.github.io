import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import BannerSection from './bannerSection';
import IconsSection from './iconsSection';
import ProjectsAndContributorsSection from './projectsAndContributorsSection';
import GithubIssuesListSection from './githubIssuesListSection';

const Section = (props) => {
  switch (get(props, 'data.system.type')) {
    case 'banner_section':
      return <BannerSection {...props} />;
    case 'icons_section':
      return <IconsSection {...props} />;
    case 'projects_and_contributors_section':
      return <ProjectsAndContributorsSection {...props} />;
    case 'task_list_section':
      return <GithubIssuesListSection {...props} />;
    default:
      return <div>Unknown section!</div>;
  }
};

Section.propTypes = {
  data: PropTypes.object,
};

export default Section;