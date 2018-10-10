import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ close, placement }) => (
  <div className="placement-settings__heading-container">
    <button
      type="button"
      onClick={close}
      className="placement-settings__close icon icon-regular material-icons isCursorPointer"
    >
      close
    </button>
    <h4 className="heading heading--small heading--thin heading--no-offset">
      {placement.name}
      (
      { placement.id }
      )
    </h4>
  </div>
);

Header.defaultProps = {
  close: null,
  placement: null,
};

Header.propTypes = {
  close: PropTypes.func,
  placement: PropTypes.func,
};

export default Header;
