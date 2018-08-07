import React from 'react';

import logo from '../../../static/assets/logo/@1x.png';

export default () => {
  return (
    <div className="l-page">
      <div className="l-container">
        <div className="wave"/>
        <div className="l-login">
          <div className="login-form">
            <div className="logo-container text-center">
              <img src={logo}/>
            </div>
            <h4 className="heading heading--large text-center">Developers Platform</h4>
            <div className="form">
              <div className="input input--extra-offset-bottom">
                <input type="text" placeholder="Your Email goes here"/>
              </div>
              <div className="input">
                <input type="password" placeholder="Password it like a boss"/>
                <i className="input__icon material-icons is-cursor-pointer">remove_red_eye</i>
              </div>
              <div className="extra">
                <label className="remember-me">
                  <span className="checkbox">
                    <input type="checkbox"/>
                    <span className="checkbox-ui text--white text-center material-icons">done</span>
                  </span>
                  <span className="text">Remember Me</span>
                </label>
                <div className="text">
                  <a href="javascript:void(0);">Forgot Password</a>
                </div>
              </div>
              <button className="btn login-btn">Log In</button>
              <div className="register text text-center">
                To register <a href="javascript:void(0);">click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
