import React from 'react';
import PropTypes from 'prop-types';

import backgroundImg from '../../../static/assets/login-page/team/@1x.png';

const Login = ({ loginForm }) => (
  <div className="l-page l-page-bg-white">
    <div className="l-container">
      <div className="wave" />
      <div className="l-login">
        {loginForm}
        <img className="l-login__background" src={backgroundImg} alt="" />
      </div>
    </div>
  </div>
);

Login.defaultProps = {
  loginForm: null,
};

Login.propTypes = {
  loginForm: PropTypes.element,
};

export default Login;
