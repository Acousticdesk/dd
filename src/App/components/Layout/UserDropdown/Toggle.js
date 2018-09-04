import React from 'react';
import PropTypes from 'prop-types';
import withStopPropagationNativeEvent from '../../../HOC/withStopPropagationNativeEvent';

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
  onClick: PropTypes.func,
};

export default withStopPropagationNativeEvent(Toggle);
