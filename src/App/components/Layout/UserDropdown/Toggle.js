import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({email, onClick}) => {
  return (
    <p onClick={onClick} className="color--grey">
      {email}
      <i className="material-icons">arrow_drop_down</i>
    </p>
  );
};

Toggle.propTypes = {
  email: PropTypes.string,
  onItemClick: PropTypes.func
};

export default Toggle;
