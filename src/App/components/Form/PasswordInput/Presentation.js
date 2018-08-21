import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

const Presentation = ({onChange, type, passwordVisibleClass, onShowPassword, isPasswordVisible}) => {
  return (
    <div className={`password-input input ${passwordVisibleClass}`}>
      <input
        name="password"
        onChange={onChange}
        type={type}
        className="input__field"
        placeholder="Password it like a boss"/>
      <Icon onShowPassword={onShowPassword} isPasswordVisible={isPasswordVisible}/>
    </div>
  );
};

Presentation.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  passwordVisibleClass: PropTypes.string,
  onShowPassword: PropTypes.func,
  isPasswordVisible: PropTypes.bool
};

export default Presentation;
