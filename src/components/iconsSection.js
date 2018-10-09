import React from 'react';
import PropTypes from 'prop-types';

const IconsSection = (props) => {
  const icons = props.data.icons.map((icon, index) => <div className="box-33" key={index}>
    <div className="box-33">
      <img src={icon.icon.assets[0].url} alt="" />
      <h3>{icon.title.text}</h3>
      <p>{icon.subtitle.text}</p>
    </div>
  </div>
  );
  const headline = props.data.section_info__title.text && <div className="row-flex type">
    <div className="box-100">
      {props.data.section_info__title.text}
    </div>
  </div>;

  return (
    <section className="second" id="value-propositions" style={{
      background: `#151B31 url(${props.data.section_info__background_image.assets[0].url}) top center no-repeat`
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
    section_info__title: PropTypes.object,
    section_info__background_image: PropTypes.object,
    icons: PropTypes.array
  }),
};

export default IconsSection;