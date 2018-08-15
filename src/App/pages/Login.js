import React from 'react';

const Login = ({children}) => {
  return (
    <div className="l-page">
      <div className="l-container">
        <div className="wave"/>
        <div className="l-login">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Login;
