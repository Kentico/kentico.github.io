import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import IconsSection from './iconsSection';
import BannerSection from './bannerSection';
import ProjectsAndContributorsSection from './projectsAndContributorsSection';
import GithubIssuesListSection from './githubIssuesListSection';

const Section = (props) => {
  switch (get(props, 'data.system.type')) {
    case 'icons_section':
      return <IconsSection {...props} />;
    case 'banner_section':
      return <BannerSection {...props} />;
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