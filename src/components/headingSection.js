import React from 'react';
import PropTypes from 'prop-types';

const HeadingSection = (props) => {
  return (
    <section className="first" style={{
      background: `#1C263F url(${props.backgroundImage.url}) bottom center no-repeat`,
      minHeight: '700px',
      textAlign: 'center'
    }}>
      <div className="row-flex">
        <div className="logo"
          style={{
            background: `url(${props.logo.url}) center center no-repeat`
          }}>
          <a href="/"><span>Kentico</span></a>
        </div>
      </div>

      <div className="row-flex">
        <h1>{props.title}</h1>
        <p className="subtitle">{props.subtitle}</p>

        <a href={props.ctaUrl} className="btn">{props.ctaText}</a>
      </div>
    </section>
  );
};

HeadingSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaUrl: PropTypes.string,
  ctaText: PropTypes.string,
  logo: PropTypes.object,
  backgroundImage: PropTypes.object
};

export default HeadingSection;