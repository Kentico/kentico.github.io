
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SVG from 'react-inlinesvg';

import linkIcon from '../images/link.svg';


const StackOverflowSection = (props) => {
  return (
    <section className="stackoverflow" id={_.camelCase(props.data.elements.section_info__title.text)} style={{
      background: `#151B31 url(${props.data.elements.section_info__background_image.assets[0].url}) bottom center no-repeat`
    }}>
      <div className="content">
        <div className="row-flex">
          <h2>
            {props.data.elements.section_info__title.text}
          </h2>
        </div>
        <div className="row-flex">
          <div className="box-50 questions">
            <h3>
              <a href="https://stackoverflow.com/tags/kentico-cloud">
                Questions
                <SVG src={linkIcon} >
                  <img src={linkIcon} alt="link icon" />
                </SVG>
              </a>
            </h3>
            <ul>
              <li>
                <a href="https://stackoverflow.com/questions/53661707/prevent-automapper-converting-ienumerable-property-to-list">
                  <img src="https://i.stack.imgur.com/GuQcY.jpg" />
                  <span>Prevent Automapper converting IEnumerable Property to List</span>
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/questions/54870058/graphql-duplicated-documents-error-when-retreiving-multiple-data-types-in-gatsby">
                  <img src="https://i.stack.imgur.com/2ktYp.jpg" />
                  <span>graphql duplicated documents error when retreiving multiple data types in Gatsby-node.js</span>
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/questions/53705861/vuejs-get-request-with-bearer-token">
                  <img src="https://graph.facebook.com/545165412/picture?type=large" />
                  <span>VueJS GET request with Bearer token</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="box-50 cta">
            <a
              className="btn"
              href={props.data.elements.cta__url.text}
              target="_blank"
              rel="noopener noreferrer">
              {props.data.elements.cta__text.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

StackOverflowSection.propTypes = {
  data: PropTypes.shape({
    elements: PropTypes.shape({
      section_info__title: PropTypes.object,
      section_info__background_image: PropTypes.object,
      cta__url: PropTypes.object,
      cta__text: PropTypes.object,
      icons: PropTypes.array
    })
  })
};

export default StackOverflowSection;
