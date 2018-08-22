import PropTypes from 'prop-types';
import React from 'react';

const Toggle = ({toggle, onClick}) => {
  return (
    toggle
      ? React.cloneElement(toggle, {
        onClick
      })
      : null
  );
};

Toggle.propTypes = {
  toggle: PropTypes.element,
  onClick: PropTypes.func
};

export default Toggle;
