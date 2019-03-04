import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <section
      className="footer"
      style={{
        background: `#1C263F url(${props.data.backgrounds[0].url}) top center no-repeat`
      }}>
      <div className="row-flex links">
        <div className="box-33" dangerouslySetInnerHTML={{ __html: props.data.footer_left_column.value }}>
        </div>
        <div className="box-33" dangerouslySetInnerHTML={{ __html: props.data.footer_center_column.value }}>
        </div>
        <div className="box-33 mobile-long-name" dangerouslySetInnerHTML={{ __html: props.data.footer_right_column.value }}>
        </div>
      </div>
      <div className="row-flex">
        <div className="box-100 copyright">
          &copy; {new Date().getFullYear()} {props.data.footer_bottom_text.text}
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  data: PropTypes.shape({
    section_info__background_image: PropTypes.object,
    footer_left_column: PropTypes.object,
    footer_center_column: PropTypes.object,
    footer_right_column: PropTypes.object,
    footer_bottom_text: PropTypes.object,
    backgrounds: PropTypes.array
  }),
};

export default Footer;