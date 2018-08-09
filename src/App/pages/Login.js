import React from 'react';

import logo from '../../../static/assets/logo/@1x.png';

export default () => {
  return (
    <div className="l-page">
      <div className="l-container">
        <div className="wave"/>
        <div className="l-login">
          <div className="login-form">
            <div className="login-form__logo-container text-center">
              <img src={logo}/>
            </div>
            <h4 className="heading developers-platform-heading heading--large text-center">Developers Platform</h4>
            <div className="form">
              <div className="login-form__field-container">
                <div className="input">
                  <input type="text" className="input__field" placeholder="Your Email goes here"/>
                </div>
              </div>
              <div className="login-form__field-container--offset-small">
                <div className="input">
                  <input type="password" className="input__field" placeholder="Password it like a boss"/>
                  <i className="input__icon material-icons isCursorPointer">remove_red_eye</i>
                </div>
              </div>
              <div className="login-form__fields-footer">
                <div className="login-optionals">
                  <div className="login-optionals__item-col--pull-left">
                    <span className="checkbox-radio-common checkbox">
                      <input type="checkbox"/>
                      <span className="checkbox-radio-common__ui checkbox__ui color--white text-center material-icons isCursorPointer">done</span>
                    </span>
                    <span className="color--grey isCursorPointer">Remember Me</span>
                  </div>
                  <div className="login-optionals__item-col">
                    <a href="javascript:void(0);" className="color--grey isCursorPointer isHoverUnderline">Forgot Password</a>
                  </div>
                </div>
              </div>
              <div className="login-form__cta-container">
                <button className="btn login-btn">Log In</button>
              </div>
              <div className="color--grey text-center">
                To register <a href="javascript:void(0);" className="text-underline isCursorPointer">click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
