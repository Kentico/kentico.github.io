import React from 'react';
import PropTypes from 'prop-types';

const ProjectsAndContributorsSection = (props) => {

  const icons = props.data.icons.map((icon, index) => <div className="box-33" key={index}>
      <img src={icon.icon.assets[0].url} alt="" />
      <strong>{icon.title.text}</strong>
    </div>);

  return (
    <section
      className="fifth" id="our-projects" style={{
        background: `#2C3753 url(${props.data.section_info__background_image.assets[0].url}) bottom center no-repeat`
      }}>
      <div className="row-flex">
        <div className="box-100">
          <h2>{props.data.section_info__title.text}</h2>
          <h3>{props.data.section_info__subtitle.text}</h3>
        </div>
      </div>
      <div className="row-flex stats">
        {icons}
      </div>
    </section>
  );
};

ProjectsAndContributorsSection.propTypes = {
  data: PropTypes.shape({
    section_info__title: PropTypes.object,
    section_info__subtitle: PropTypes.object,
    section_info__background_image: PropTypes.object,
    icons: PropTypes.array
  }),
};

export default ProjectsAndContributorsSection;