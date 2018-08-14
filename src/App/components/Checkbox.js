import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({checked, label, extraClass, ...props}) => {
  const id = `checkbox_${Date.now()}`;

  return (
    <React.Fragment>
        <span className={`checkbox-radio-common checkbox ${checked ? 'checked' : ''}`}>
          <input {...props} id={id} type="checkbox"/>
          <label htmlFor={id}
            className={`
              checkbox-radio-common__ui
              checkbox__ui
              color--white
              text-center
              material-icons
              isCursorPointer
              ${extraClass}
            `}>
            {checked ? 'done' : ''}
          </label>
        </span>
      <label htmlFor={id} className="color--grey isCursorPointer">{label}</label>
    </React.Fragment>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  extraClass: PropTypes.string
};

export default Checkbox;
