import React from 'react';
import PropTypes from 'prop-types';

import Presentation from './Presentation';

const getClassValue = (condition) => (classNameTrue, classNameFalse = '') => {
  return condition ? classNameTrue : classNameFalse;
};

const Checkbox = ({classExtra, theSwitch, input, ...props}) => {
  const id = 'checkbox_' + Math.random().toString(36).substr(2, 9);
  const valueReduxForm = input && input.value;
  const checked = valueReduxForm || props.checked;
  const classChecked = getClassValue(checked)('checked');
  const classSwitch = getClassValue(theSwitch)('checkbox__switch-ui', 'checkbox__ui');
  const classLabel = getClassValue(checked)('text-bold');
  const icon = getClassValue(checked && !theSwitch)('done');

  return (
    <Presentation
      {...props}
      input={input}
      id={id}
      classChecked={classChecked}
      classSwitch={classSwitch}
      classLabel={classLabel}
      classExtra={classExtra}
      icon={icon}
      isChecked={valueReduxForm}
    />
  );
};

Checkbox.propTypes = {
  classExtra: PropTypes.string,
  theSwitch: PropTypes.bool,
  input: PropTypes.object,
};

export default Checkbox;
