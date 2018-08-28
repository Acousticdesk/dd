import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({input, ...props}) => {
  const id = 'radio_' + Math.random().toString(36).substr(2, 9);

  return (
    <span className={`integration-select__option checkbox-radio-common radio ${props.checked ? 'selected' : ''}`}>
      <input {...props} {...input} id={id} />
      <label
        htmlFor={id}
        className={`
          checkbox-radio-common__ui
          radio__ui
          ${props.disabled ? 'checkbox-radio-common__ui--disabled': ''}
        `}
      />
      <label
        htmlFor={id}
        className={`
          ${props.disabled ? 'color--disabled' : 'color--dark'}
          ${props.checked ? 'text-bold' : ''}
          ${!props.disabled ? 'isCursorPointer' : ''}
          va-middle
      `}>
        {props.label}
      </label>
    </span>
  );
};

Radio.propTypes = {
  input: PropTypes.object,
};

export default Radio;
