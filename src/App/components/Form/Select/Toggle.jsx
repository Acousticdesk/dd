import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/index';
import Caret from './Caret';

const Toggle = ({ label, ...props }) => (
  <Input {...props} label={label} extraClass="isCursorPointer" readOnly icon={<Caret />} />
);

Toggle.defaultProps = {
  label: null,
};

Toggle.propTypes = {
  label: PropTypes.string,
};

export default Toggle;
