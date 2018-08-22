import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

const Presentation = ({passwordVisibleClass, onShowPassword, isPasswordVisible, input, ...props}) => {
  console.log(props.input);
  return (
    <div className={`password-input input ${passwordVisibleClass}`}>
      <input
        {...input}
        {...props}
        className="input__field"
        placeholder="Password it like a boss"
      />
      <Icon onShowPassword={onShowPassword} isPasswordVisible={isPasswordVisible}/>
    </div>
  );
};

Presentation.propTypes = {
  passwordVisibleClass: PropTypes.string,
  onShowPassword: PropTypes.func,
  isPasswordVisible: PropTypes.bool,
  input: PropTypes.object,
};

export default Presentation;
