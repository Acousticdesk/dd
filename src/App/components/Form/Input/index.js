import React from 'react';
import PropTypes from 'prop-types';

import Presentation from './Presentation';

const errClass = (err, isTouched) => {
  if (!err || !isTouched) {
    return '';
  }

  return 'input__field--error';
};

const getValue = (props, input) => {
  return input ? input.value : props.value;
};

const Input = ({icon, extraClass, input, meta, ...props}) => {
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
    />
  );
};

Input.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  extraClass: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object.isRequired,
};

Input.defaultProps = {
  meta: {}
};

export default Input;
