import React from 'react';
import PropTypes from 'prop-types';

export const DefaultHeaderContent = ({title, close}) => {
  return (
    <React.Fragment>
      <div className="modal__title-container">
        <h4 className="heading heading--md heading--thin">{title}</h4>
      </div>
      <div className="modal__close-container text-center">
        <i onClick={close} className="icon icon-light material-icons isCursorPointer">close</i>
      </div>
    </React.Fragment>
  );
};

DefaultHeaderContent.propTypes = {
  title: PropTypes.string,
  close: PropTypes.func
};

export default DefaultHeaderContent;
