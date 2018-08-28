import React from 'react';
import PropTypes from 'prop-types';

import Presentation from './Presentation';

const Checkbox = ({classExtra, theSwitch, input, ...props}) => {
  const id = 'checkbox_' + Math.random().toString(36).substr(2, 9);
  const classChecked = props.checked ? 'checked' : '';
  const classSwitch = !theSwitch ? 'checkbox__ui' : 'checkbox__switch-ui';
  const classLabel = props.checked ? 'text-bold' : '';
  const icon = props.checked && !theSwitch ? 'done' : '';

  return (
    <Presentation
      {...props}
      {...input}
      id={id}
      classChecked={classChecked}
      classSwitch={classSwitch}
      classLabel={classLabel}
      classExtra={classExtra}
      icon={icon}
    />
  );
};

Checkbox.propTypes = {
  classExtra: PropTypes.string,
  theSwitch: PropTypes.bool,
  input: PropTypes.object,
};

export default Checkbox;
