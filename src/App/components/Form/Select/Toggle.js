import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Caret from './Caret';

const Toggle = ({label, ...props}) => {
  return (
    <React.Fragment>
      <Input {...props} label={label} extraClass="isCursorPointer" readOnly icon={<Caret/>}/>
    </React.Fragment>
  );
};

Toggle.propTypes = {
  label: PropTypes.label
};

export default Toggle;
