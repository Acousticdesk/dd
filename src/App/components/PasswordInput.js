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
    return (
      <div className="input">
        <input
          name="password"
          onChange={this.props.onChange}
          type={!this.state.isPasswordVisible ? 'password' : 'text'}
          className="input__field"
          placeholder="Password it like a boss"/>
        <i onClick={this.onShowPassword} className="input__icon material-icons isCursorPointer">remove_red_eye</i>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  onChange: PropTypes.func
};

export default PasswordInput;


