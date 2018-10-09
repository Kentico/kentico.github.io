import React from 'react';
import PropTypes from 'prop-types';

const BannerSection = (props) => {
  return (
    <section className="fourth" id="hacktoberfest" style={{
      background: `#582D40 url(${props.data.section_info__background_image.assets[0].url}) top center no-repeat`
    }}>
      <div className="row-flex">
        <div className="box-100">
          <img src={props.data.icon.assets[3].url} alt="Hacktoberfest" className="hacktoberfest" />
          <h2>{props.data.section_info__title.text}</h2>
          <h3>{props.data.section_info__subtitle.text}</h3>
        </div>
      </div>
      <div>
        <div className="row-flex">
          <div className="box-50 text">
            <div className="brno"
              dangerouslySetInnerHTML={{ __html: props.data.main_text.value }}
              style={{
                background: `url(${props.data.icon.assets[4].url}) center left no-repeat`,
                backgroundSize: '50px'
              }}></div>
          </div>
        </div>
        <div className="row-flex">
          <div className="box-100 partners">
            <img className="logo-do" src={props.data.icon.assets[0].url} alt="" />
            <img className="logo-git" src={props.data.icon.assets[1].url} alt="" />
            <img className="logo-tw" src={props.data.icon.assets[2].url} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

BannerSection.propTypes = {
  data: PropTypes.shape({
    section_info__title: PropTypes.object,
    section_info__subtitle: PropTypes.object,
    section_info__background_image: PropTypes.object,
    icon: PropTypes.object,
    main_text: PropTypes.object
  }),
};

export default BannerSection;