import React from 'react';
import PropTypes from 'prop-types';

import withCustomOnChangeReduxForm from '../../../HOC/withCustomOnChange';
import Presentation from './Presentation';

const getClassValue = condition => (classNameTrue, classNameFalse = '') => (condition ? classNameTrue : classNameFalse);

const Checkbox = ({
  classExtra,
  theSwitch,
  input,
  onChange,
  ...props
}) => {
  const id = `checkbox_${Math.random().toString(36).substr(2, 9)}`;
  const valueReduxForm = input && input.value;
  const { checked } = props;
  const isChecked = valueReduxForm || checked;
  const classChecked = getClassValue(isChecked)('checked');
  const classSwitch = getClassValue(theSwitch)('checkbox__switch-ui', 'checkbox__ui');
  const classLabel = getClassValue(isChecked)('text-bold');
  const icon = getClassValue(isChecked && !theSwitch)('done');

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
      onChange={onChange}
    />
  );
};

Checkbox.defaultProps = {
  classExtra: null,
  theSwitch: null,
  input: null,
  onChange: null,
};

Checkbox.propTypes = {
  classExtra: PropTypes.string,
  theSwitch: PropTypes.bool,
  input: PropTypes.shape(),
  onChange: PropTypes.func,
};

export default withCustomOnChangeReduxForm(Checkbox);
