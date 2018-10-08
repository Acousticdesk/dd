import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PasswordInputPresentation from './Presentation';

const getInputType = isPasswordVisible => (isPasswordVisible ? 'password' : 'text');

const getVisibilityClass = isPasswordVisible => (isPasswordVisible ? 'password-input--visible' : '');

class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.state = { isPasswordVisible: false };

    this.onShowPassword = this.onShowPassword.bind(this);
  }

  onShowPassword() {
    this.setState(prevState => ({ isPasswordVisible: !prevState.isPasswordVisible }));
  }

  render() {
    const { isPasswordVisible } = this.state;
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

PasswordInput.defaultProps = {
  onChange: null,
  input: null,
};

PasswordInput.propTypes = {
  onChange: PropTypes.func,
  input: PropTypes.shape(),
};

export default PasswordInput;
