import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PasswordInputPresentation from './Presentation';

const getInputType = (isPasswordVisible) => {
  return !isPasswordVisible ? 'password' : 'text'
};

const getVisibilityClass = (isPasswordVisible) => {
  return isPasswordVisible ? 'password-input--visible' : ''
};

class PasswordInput extends Component {
  state = {
    isPasswordVisible: false
  };

  onShowPassword = () => {
    this.setState((prevState) => ({isPasswordVisible: !prevState.isPasswordVisible}));
  };

  render () {
    const {isPasswordVisible} = this.state;
    const inputType = getInputType(isPasswordVisible);
    const passwordVisibleClass = getVisibilityClass(isPasswordVisible);

    return (
      <PasswordInputPresentation
        {...this.props}
        type={inputType}
        passwordVisibleClass={passwordVisibleClass}
        onShowPassword={this.onShowPassword}
        isPasswordVisible={isPasswordVisible}
      />
    );
  }
}

PasswordInput.propTypes = {
  onChange: PropTypes.func,
  input: PropTypes.object
};

export default PasswordInput;


