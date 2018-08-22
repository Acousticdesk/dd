import React from 'react';
import PropTypes from 'prop-types';

const ConfirmText = ({text}) => {
  return text || 'Save';
};

ConfirmText.propTypes = {
  text: PropTypes.string
};

export default ConfirmText;
