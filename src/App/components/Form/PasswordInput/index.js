import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PasswordInputPresentation from './Presentation';

class PasswordInput extends Component {
  state = {
    isPasswordVisible: false
  };

  onShowPassword = () => {
    this.setState((prevState) => ({isPasswordVisible: !prevState.isPasswordVisible}));
  };

  render () {
    const inputType = !this.state.isPasswordVisible ? 'password' : 'text';
    const passwordVisibleClass = this.state.isPasswordVisible ? 'password-input--visible' : '';

    return (
      <PasswordInputPresentation
        onChange={this.props.onChange}
        type={inputType}
        passwordVisibleClass={passwordVisibleClass}
        onShowPassword={this.onShowPassword}
        isPasswordVisible={this.state.isPasswordVisible}
      />
    );
  }
}

PasswordInput.propTypes = {
  onChange: PropTypes.func
};

export default PasswordInput;


