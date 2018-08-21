import React from 'react';
import PropTypes from 'prop-types';

const ErrorMsg = ({error, isTouched}) => {
  if (!error || !isTouched) {
    return null;
  }

  return (
    <p className="input__error text--small">{error}</p>
  );
};

ErrorMsg.propTypes = {
  error: PropTypes.string,
  isTouched: PropTypes.bool
};

export default ErrorMsg;
