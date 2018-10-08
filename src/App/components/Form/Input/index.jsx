import React from 'react';
import PropTypes from 'prop-types';

import withCustomOnChangeReduxForm from '../../../HOC/withCustomOnChange';
import Presentation from './Presentation';

const errClass = (err, isTouched) => {
  if (!err || !isTouched) {
    return '';
  }

  return 'input__field--error';
};

const getValue = (props, input) => (input ? input.value : props.value);

const Input = ({
  icon,
  extraClass,
  input,
  meta,
  onChange,
  ...props
}) => {
  const errorClass = errClass(meta.error, meta.touched);
  const value = getValue(props, input);

  return (
    <Presentation
      {...props}
      icon={icon}
      inputValue={value}
      errorClass={errorClass}
      extraClass={extraClass}
      meta={meta}
      input={input}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  icon: null,
  onClick: null,
  extraClass: null,
  input: null,
  meta: {},
  onChange: null,
};

Input.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  extraClass: PropTypes.string,
  input: PropTypes.shape(),
  meta: PropTypes.shape(),
  onChange: PropTypes.func,
};

export default withCustomOnChangeReduxForm(Input);
