import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class BannerSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionStyles: {
        background: `
            #FCD395
            url(${props.data.elements.section_info__background_image.assets[0].url}) 
            top 
            center 
            no-repeat`,
      }
    };
  }

  componentDidMount() {
    this.setSectionStyles();
  }

  setSectionStyles = () => {
    if (window.innerWidth <= 1024) {
      this.setState({
        sectionStyles: {
          background: `
              #FCD395
              url(${this.props.data.elements.section_info__background_image.assets[1].url}) 
              top 
              center 
              no-repeat`
        }
      })
    } else {
      this.setState({
        sectionStyles: {
          background: `
              #FCD395
              url(${this.props.data.elements.section_info__background_image.assets[0].url}) 
              top 
              center 
              no-repeat`
        }
      })
    }
  }



  render() {
    const elements = this.props.data.elements;

    const additionalContent = <div>
      <div className="row-flex">
        <div className="text">
          <div
            dangerouslySetInnerHTML={{ __html: elements.main_text.value }}>
          </div>
        </div>
      </div>
    </div>;

    return (
      <section className="banner-section" id={_.camelCase(elements.section_info__title.text)} style={this.state.sectionStyles} >
        <div className="content">
          <div className="box-100 title">
            <h2 dangerouslySetInnerHTML={{ __html: elements.section_info__title.text.replace("a ", "a&nbsp;") }}></h2>
          </div>
          {additionalContent}
          <div className="row-flex">
            <div className="box-100 cta">
              <a href={elements.url_link.text} className="btn">{elements.url_text.text}</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

BannerSection.propTypes = {
  data: PropTypes.shape({
    elements: PropTypes.shape({
      section_info__title: PropTypes.object,
      section_info__subtitle: PropTypes.object,
      section_info__background_image: PropTypes.object,
      icon: PropTypes.object,
      url_text: PropTypes.object,
      url_link: PropTypes.object,
      main_text: PropTypes.object,
      side_text: PropTypes.object,
      additional_label_1: PropTypes.object
    })
  }),
};

export default BannerSection;