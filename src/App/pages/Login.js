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
            <h4 className="header text-center">Developers Platform</h4>
            <div className="form">
              <div className="input input--extra-offset-bottom">
                <input type="text" placeholder="Your Email goes here"/>
              </div>
              <div className="input">
                <input type="password" placeholder="Password it like a boss"/>
                <i className="icon icon--hover material-icons">remove_red_eye</i>
              </div>
              <div className="extra">
                <label className="remember-me">
                  <span className="checkbox">
                    <input type="checkbox"/>
                    <span className="checkbox-ui text-center material-icons">done</span>
                  </span>
                  <span>Remember Me</span>
                </label>
                <div className="forgot-password">
                  <a href="javascript:void(0);">Forgot Password</a>
                </div>
              </div>
              <button className="login-btn">Log In</button>
              <div className="register text-center">
                To register <a href="javascript:void(0);">click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
