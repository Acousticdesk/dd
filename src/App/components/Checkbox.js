import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({checked, name, label, extraClass, theSwitch, onChange, ...props}) => {
  const id = 'checkbox_' + Math.random().toString(36).substr(2, 9);
  const theOnChange = (evt) => {
    onChange({name, value: evt.currentTarget.checked});
  };

  return (
    <React.Fragment>
        <span className={`checkbox-radio-common checkbox ${checked ? 'checked' : ''}`}>
          <input {...props} onChange={theOnChange} id={id} type="checkbox"/>
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
  name: PropTypes.string,
  label: PropTypes.string,
  extraClass: PropTypes.string,
  theSwitch: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
