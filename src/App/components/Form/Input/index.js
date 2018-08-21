import React from 'react';
import PropTypes from 'prop-types';

import ErrorMsg from './ErrorMsg';

const errClass = (err, isTouched) => {
  if (!err || !isTouched) {
    return '';
  }

  return 'input__field--error';
};

const Input = ({value, name, label, icon, extraClass, onChange, onClick, input, meta, ...props}) => {
  const theOnChange = (evt) => {
    typeof onChange === 'function' && onChange({name, value: evt.currentTarget.value});
  };

  return (
    <div className="input">
      <label className="input__label color--grey-lighter">{label}</label>
      <input
        {...input}
        {...props}
        autoComplete="off"
        type="text"
        name={name}
        className={`input__field color--dark ${extraClass} ${errClass(meta.error, meta.touched)}`}
        value={value}
        onChange={theOnChange}
        onClick={onClick}
      />
      {icon}
      <ErrorMsg error={meta.error} isTouched={meta.touched}/>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.element,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  extraClass: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default Input;
