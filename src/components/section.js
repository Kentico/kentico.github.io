import React from 'react';
import PropTypes from 'prop-types';

import IconsSection from './iconsSection';
import BannerSection from './bannerSection';
import ProjectsAndContributorsSection from './projectsAndContributorsSection';

const Section = (props) => {  
  switch (props.data.system.type) {
    case 'icons_section':
      return <IconsSection {...props}/>;
    case 'banner_section':
      return <BannerSection {...props}/>;
    case 'projects_and_contributors_section':
      return <ProjectsAndContributorsSection {...props}/>;      
    default:
      return <div>Unknown section!</div>;
  }
};

Section.propTypes = {
  data: PropTypes.object,
};

export default Section;