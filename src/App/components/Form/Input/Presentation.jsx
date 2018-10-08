import React from 'react';
import PropTypes from 'prop-types';

import ErrorMsg from './ErrorMsg';

const Presentation = ({
  icon,
  errorClass,
  extraClass,
  inputValue,
  input,
  meta,
  onChange,
  label,
  name,
  onClick,
  ...props
}) => (
  <div className="input">
    <p className="input__label color--grey-lighter">{label}</p>
    <input
      {...input}
      {...props}
      type="text"
      name={name}
      className={`input__field color--dark ${extraClass} ${errorClass}`}
      value={inputValue}
      onClick={onClick}
      onChange={onChange}
    />
    {icon}
    <ErrorMsg error={meta.error} isTouched={meta.touched} />
  </div>
);

Presentation.defaultProps = {
  icon: null,
  onClick: null,
  input: null,
  meta: {},
  inputValue: null,
  classNameValue: null,
  errorClass: null,
  extraClass: null,
  onChange: null,
};

Presentation.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  input: PropTypes.shape(),
  meta: PropTypes.shape(),
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  classNameValue: PropTypes.string,
  errorClass: PropTypes.string,
  extraClass: PropTypes.string,
  onChange: PropTypes.func,
};

export default Presentation;
