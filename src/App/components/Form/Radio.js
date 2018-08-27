import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({checked, label, input, ...props}) => {
  const id = 'radio_' + Math.random().toString(36).substr(2, 9);

  console.log(props.defaultChecked);

  return (
    <span className={`integration-select__option checkbox-radio-common radio ${checked ? 'selected' : ''}`}>
      <input {...props} {...input} id={id}/>
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
  input: PropTypes.object
};

export default Radio;
