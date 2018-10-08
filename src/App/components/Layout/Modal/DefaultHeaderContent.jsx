import React from 'react';
import PropTypes from 'prop-types';

const DefaultHeaderContent = ({ title, close }) => (
  <React.Fragment>
    <div className="modal__title-container">
      <h4 className="heading heading--md heading--thin">{title}</h4>
    </div>
    <div className="modal__close-container text-center">
      <button type="button" onClick={close} className="icon icon-light material-icons isCursorPointer">close</button>
    </div>
  </React.Fragment>
);

DefaultHeaderContent.defaultProps = {
  title: null,
  close: null,
};

DefaultHeaderContent.propTypes = {
  title: PropTypes.string,
  close: PropTypes.func,
};

export default DefaultHeaderContent;
