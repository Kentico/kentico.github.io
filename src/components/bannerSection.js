import React from 'react';
import PropTypes from 'prop-types';

const BannerSection = (props) => {

  const sectionStyles = {
    background: `
        ${props.data.elements.section_info__background_color.value}
        url(${props.data.elements.section_info__background_image.value[0].url})
        bottom 
        center
        no-repeat`,
  };

  const elements = props.data.elements;
  return (
    <section className="banner-section" id={props.data.system.codename} style={sectionStyles} >
      <div className="row-flex">
        <div className="box-100 header">
          <h2 dangerouslySetInnerHTML={{ __html: elements.section_info__title.value.replace("a ", "a&nbsp;") }}></h2>
          <h3 dangerouslySetInnerHTML={{ __html: elements.section_info__subtitle.value.replace("a ", "a&nbsp;") }}></h3>
        </div>
      </div>
      <div className="row-flex content">
        <div className="box-100">
          <div dangerouslySetInnerHTML={{ __html: elements.main_text.value }} className="main-text" />
          {elements.side_text.value &&
            <div dangerouslySetInnerHTML={{ __html: elements.side_text.value }} className="side-text" />
          }
        </div>
        <div className="box-100">
          <a href={elements.url_link.value} className="btn">{elements.url_text.value}</a>
        </div>
      </div>
    </section>
  );

}

BannerSection.propTypes = {
  data: PropTypes.shape({
    system: PropTypes.shape({
      codename: PropTypes.string
    }),
    elements: PropTypes.shape({
      section_info__title: PropTypes.object,
      section_info__subtitle: PropTypes.object,
      section_info__background_image: PropTypes.object,
      section_info__background_color: PropTypes.object,
      url_text: PropTypes.object,
      url_link: PropTypes.object,
      main_text: PropTypes.object,
      side_text: PropTypes.object
    })
  }),
};

export default BannerSection;