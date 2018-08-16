import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({checked, label, name, onChange, ...props}) => {
  const id = 'radio_' + Math.random().toString(36).substr(2, 9);
  const theOnChange = (evt) => {
    onChange({name, value: evt.currentTarget.value});
  };
  return (
    <span className={`integration-select__option checkbox-radio-common radio ${checked ? 'selected' : ''}`}>
      <input {...props} name={name} onChange={theOnChange} type="radio" id={id}/>
      <label htmlFor={id} className="checkbox-radio-common__ui radio__ui isCursorPointer"/>
      <label htmlFor={id} className={`color--dark ${checked ? 'text-bold' : ''} va-middle isCursorPointer`}>{label}</label>
    </span>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default Radio;
