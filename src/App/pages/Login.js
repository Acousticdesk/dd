import React from 'react';
import PropTypes from 'prop-types';

const Login = ({loginForm}) => {
  return (
    <div className="l-page l-page-bg-white">
      <div className="l-container">
        <div className="wave"/>
        <div className="l-login">
          {loginForm}
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginForm: PropTypes.element
};

export default Login;
