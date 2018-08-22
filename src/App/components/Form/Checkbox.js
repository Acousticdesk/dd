import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({checked, extraClass, theSwitch, input, label, ...props}) => {
  const id = 'checkbox_' + Math.random().toString(36).substr(2, 9);

  return (
    <React.Fragment>
        <span className={`checkbox-radio-common checkbox ${checked ? 'checked' : ''}`}>
          <input {...input} {...props} id={id} type="checkbox"/>
          <label htmlFor={id}
            className={`
              checkbox-radio-common__ui
              ${!theSwitch ? 'checkbox__ui' : 'checkbox__switch-ui'}
              color--white
              text-center
              material-icons
              isCursorPointer
              ${extraClass}
            `}>
            {checked && !theSwitch ? 'done' : ''}
          </label>
        </span>
      <label htmlFor={id} className={`color--grey ${checked ? 'text-bold' : ''} isCursorPointer`}>{label}</label>
    </React.Fragment>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  extraClass: PropTypes.string,
  theSwitch: PropTypes.bool,
};

export default Checkbox;
