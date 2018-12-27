import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

class BannerSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionStyles: {
        background: `
            #582D40
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
    if (window.innerWidth <= 750) {
      this.setState({
        sectionStyles: {
          background: `
              #582D40
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
              #582D40
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

    const shareIcons = elements.icon.assets.slice(0, 3).map((icon, index) => {
      let url = 'https://kentico.github.io'
      let link;
      switch (index) {
        case 0:
          link = `https://twitter.com/intent/tweet?text=${elements.additional_label_1.text}`
          break;
        case 1:
          link =  `http://www.facebook.com/sharer/sharer.php?u=${url}#staticNewYear&t=${elements.additional_label_1.text}`
          break;
        case 2:
          link = `https://www.linkedin.com/shareArticle?mini=true&url=${url}#staticNewYear&summary=${elements.additional_label_1.text}`
          break;
      }

      return (<li key={icon.name}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <SVG src={icon.url} className="share-icon" >
            <img src={icon.url} alt={icon.name} />
          </SVG>
        </a>
      </li>);
    });

    const generatorLinks = elements.icon.assets.slice(3, 6).map((icon, index) => {
      let link;
      switch (index) {
        case 0:
          link = 'https://github.com/Kentico/gatsby-source-kentico-cloud';
          break;
        case 1:
          link = 'https://github.com/Domitnator/kenticocloud-nuxt-module';
          break;
        case 2:
          link = 'https://github.com/kbortnik/KenticoCloud.Wyam';
          break;
      }

      return (<li key={icon.name}>
        <a href={link}>
          <SVG src={icon.url}>
            <img src={icon.ul} alt={icon.name} />
          </SVG>
        </a>
      </li>);
    });


    return (
      <section className="fourth" id="staticNewYear" style={this.state.sectionStyles} >
        <div className="content">
          <div className="shares">
            <ul>
              {shareIcons}
            </ul>
          </div>
          <div className="box-100 title">
            <h2 dangerouslySetInnerHTML={{ __html: elements.section_info__title.text.replace("a ", "a&nbsp;") }}></h2>
          </div>
          {additionalContent}
          <div className="row-flex">
            <div className="box-100 generators">
              <ul>
                {generatorLinks}
              </ul>
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
      main_text: PropTypes.object,
      side_text: PropTypes.object,
      additional_label_1: PropTypes.object
    })
  }),
};

export default BannerSection;