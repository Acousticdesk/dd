import React from 'react';
import PropTypes from 'prop-types';

import ErrorMsg from './ErrorMsg';

const errClass = (err, isTouched) => {
  if (!err || !isTouched) {
    return '';
  }

  return 'input__field--error';
};

const Input = ({icon, extraClass, input, meta, ...props}) => {
  return (
    <div className="input">
      <label className="input__label color--grey-lighter">{props.label}</label>
      <input
        {...input}
        {...props}
        autoComplete="off"
        type="text"
        name={props.name}
        className={`input__field color--dark ${extraClass} ${errClass(meta.error, meta.touched)}`}
        value={input ? input.value : props.value}
        onClick={props.onClick}
      />
      {icon}
      <ErrorMsg error={meta.error} isTouched={meta.touched}/>
    </div>
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
