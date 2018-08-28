import React from 'react';
import PropTypes from 'prop-types';

import ErrorMsg from './ErrorMsg';

const Presentation = ({icon, errorClass, extraClass, inputValue, input, meta, ...props}) => (
  <div className="input">
    <label className="input__label color--grey-lighter">{props.label}</label>
    <input
      {...input}
      {...props}
      autoComplete="off"
      type="text"
      name={props.name}
      className={`input__field color--dark ${extraClass} ${errorClass}`}
      value={inputValue}
      onClick={props.onClick}
    />
    {icon}
    <ErrorMsg error={meta.error} isTouched={meta.touched}/>
  </div>
);

Presentation.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  input: PropTypes.object,
  meta: PropTypes.object.isRequired,
  inputValue: PropTypes.string,
  classNameValue: PropTypes.string,
  errorClass: PropTypes.string,
  extraClass: PropTypes.string,
};

export default Presentation;
