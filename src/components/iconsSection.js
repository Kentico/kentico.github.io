import React from 'react';
import PropTypes from 'prop-types';

const IconsSection = (props) => {
  const icons = props.data.icons
    .filter(icon => icon.persona[0].system.codename === props.currentPersona)
    .map(icon =>
      <div className="box-33" key={icon.system.codename}>
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

  const personaTabs = props.personas.map(persona =>
    <span key={persona.system.codename}>
      <input id={persona.system.codename} value={persona.system.codename} type="radio" name="tabs" onChange={(e) => props.changePersona(e.target.value)} defaultChecked={props.currentPersona === persona.system.codename} />
      <label htmlFor={persona.system.codename}>{persona.name.text}</label>
    </span>
  )

  return (
    <section className="second" id="value-propositions" style={{
      background: `#151B31 url(${props.data.section_info__background_image.assets[0].url}) top center no-repeat`
    }}>
      {headline}
      {personaTabs}
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
  currentPersona: PropTypes.string.isRequired,
  changePersona: PropTypes.func.isRequired,
  personas: PropTypes.arrayOf(PropTypes.shape({
    system: PropTypes.shape({
      codename: PropTypes.string.isRequired
    }),
    name: PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  }))
};

export default IconsSection;