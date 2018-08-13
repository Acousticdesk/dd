import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({label, checked, onChange}) => {
  const id = `checkbox_${Date.now()}`;

  return (
    <React.Fragment>
        <span className={`checkbox-radio-common checkbox ${checked ? 'checked' : ''}`}>
          <input checked={checked} onChange={onChange} id={id} type="checkbox"/>
          <span
            className="
              checkbox-radio-common__ui
              checkbox__ui
              color--white
              text-center
              material-icons
              isCursorPointer">
            {checked ? 'done' : ''}
          </span>
        </span>
      <label htmlFor={id} className="color--grey isCursorPointer">{label}</label>
    </React.Fragment>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool
};

export default Checkbox;
