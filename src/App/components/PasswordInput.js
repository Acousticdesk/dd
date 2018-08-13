import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PasswordInput extends Component {
  state = {
    isPasswordVisible: false
  };

  onShowPassword = () => {
    this.setState((prevState) => ({isPasswordVisible: !prevState.isPasswordVisible}));
  };

  render () {
    const inputType = !this.state.isPasswordVisible ? 'password' : 'text';
    const passwordVisibleClass = this.state.isPasswordVisible ? 'input__icon--password-visible' : '';

    return (
      <div className="password-input input">
        <input
          name="password"
          onChange={this.props.onChange}
          type={inputType}
          className="input__field"
          placeholder="Password it like a boss"/>
        <i
          onClick={this.onShowPassword}
          className={`input__icon ${passwordVisibleClass} material-icons isCursorPointer`}>
          remove_red_eye
        </i>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  onChange: PropTypes.func
};

export default PasswordInput;


