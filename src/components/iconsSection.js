import React from 'react';
import PropTypes from 'prop-types';

const IconsSection = (props) => {
  const icons = props.data.elements.icons.linked_items
    .map(icon =>
      <div className="box-33" key={icon.system.codename}>
        <div className="box-33">
          <img src={icon.elements.icon.value[0].url} alt="" />
          <h3>{icon.elements.title.value}</h3>
          <p>{icon.elements.subtitle.value}</p>
        </div>
      </div>
    );
  const headline = props.data.elements.section_info__title.value && <div className="row-flex type">
    <div className="box-100">
      {props.data.elements.section_info__title.value}
    </div>
  </div>;

  return (
    <section className="icons-section" id="value-propositions" style={{
      background: `#151B31 url(${props.data.elements.section_info__background_image.value[0].url}) top center no-repeat`
    }}>
      {headline}
      <div id="content1" className="content">
        <div className="row-flex">
          {icons}
        </div>
      </div>
    </section>
  );
};

IconsSection.propTypes = {
  data: PropTypes.shape({
    elements: PropTypes.shape({
      section_info__title: PropTypes.object,
      section_info__background_image: PropTypes.object,
      icons: PropTypes.shape({ 
        linked_items: PropTypes.array
      })
    })
  })
};

export default IconsSection;