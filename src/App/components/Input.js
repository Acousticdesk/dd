import React from 'react';
import PropTypes from 'prop-types';

const Input = ({value, name, label, onChange, onClick}) => {
  return (
    <div className="input">
      <label className="input__label color--grey-lighter">{label}</label>
      <input
        type="text"
        name={name}
        className="input__field color--dark"
        placeholder=""
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default Input;
