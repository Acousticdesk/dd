import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../../../static/assets/logo/@1x.png';

import PasswordInput from '../Form/PasswordInput';
import Checkbox from '../Form/Checkbox';

const LoginForm = ({onTryLogin, onUserType, onRememberMeChange, isRememberMe}) => {
  return (
    <div className="login-form">
      <div className="login-form__logo-container text-center">
        <img src={logo}/>
      </div>
      <h4 className="heading developers-platform-heading heading--large text-center">Developers Platform</h4>
      <div className="form">
        <div className="login-form__field-container">
          <div className="input">
            <input
              name="email"
              onChange={onUserType}
              type="text"
              className="input__field"
              placeholder="Your Email goes here"/>
          </div>
        </div>
        <div className="login-form__field-container--offset-small">
          <PasswordInput onChange={onUserType}/>
        </div>
        <div className="login-form__fields-footer">
          <div className="login-optionals">
            <div className="login-optionals__item-col--pull-left">
              <Checkbox label="Remember Me" onChange={onRememberMeChange} checked={isRememberMe}/>
            </div>
            <div className="login-optionals__item-col">
              <a href="javascript:void(0);" className="color--grey isCursorPointer isHoverUnderline">Forgot Password</a>
            </div>
          </div>
        </div>
        <div className="login-form__cta-container text-center">
          <button onClick={onTryLogin} className="btn login-btn">Log In</button>
        </div>
        <div className="color--grey text-center">
          To register <a href="javascript:void(0);" className="text-underline isCursorPointer">click here</a>
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onTryLogin: PropTypes.func.isRequired,
  onUserType: PropTypes.func.isRequired,
  onRememberMeChange: PropTypes.func.isRequired,
  isRememberMe: PropTypes.bool.isRequired
};

export default LoginForm;
