import React from 'react';
import PropTypes from 'prop-types';

const Header = ({close}) => {
  return (
    <React.Fragment>
      <div className="modal__title-container">
        <h4 className="heading heading--med heading--thin">New Application</h4>
      </div>
      <div className="modal__close-container text-center">
        <i onClick={close} className="icon icon-light material-icons isCursorPointer">close</i>
      </div>
    </React.Fragment>
  );
};

Header.propTypes = {
  close: PropTypes.func
};

export default Header;
