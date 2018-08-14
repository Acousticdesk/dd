import React from 'react';
import PropTypes from 'prop-types';

const Input = ({value, name, label, icon, extraClass, onChange, onClick, ...props}) => {
  return (
    <div className="input">
      <label className="input__label color--grey-lighter">{label}</label>
      <input
        {...props}
        autoComplete="off"
        type="text"
        name={name}
        className={`input__field color--dark ${extraClass}`}
        placeholder=""
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      {icon}
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.element,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  extraClass: PropTypes.string
};

export default Input;