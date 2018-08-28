import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/index';
import Caret from './Caret';

const Toggle = ({label, ...props}) => {
  return (
    <Input {...props} label={label} extraClass="isCursorPointer" readOnly icon={<Caret/>}/>
  );
};

Toggle.propTypes = {
  label: PropTypes.string,
};

export default Toggle;
