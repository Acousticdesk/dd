import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Login from '../pages/Login';
import API from '../../API';
import LoginForm from '../components/Page/Login/LoginForm';

const loginRequest = (email, password) => {
  return API.request('auth', 'POST', {email, password})
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.status)
      }

      return res.json();
    });
};

class LoginContainer extends PureComponent {
  state = {
    loader: false
  };

  onSubmit = ({email, password}) => {
    this.setState({loader: true});

    loginRequest(email, password)
      .finally(() => this.setState({loader: false}))
      .then(loginData => this.props.onUserLoggedIn(loginData))
      .catch((err) => {
        let msg = '';

        console.error(err);

        switch (err.message) {
          case "401":
            msg = 'No account found with presented credentials. Please, try again';
            break;
          default:
            msg = 'Ooops... Something went wrong';
        }
        window.alert(msg)
      });
  };

  render() {
    return (
      <Login
        loginForm={
          <LoginForm
            loader={this.state.loader}
            onSubmit={this.onSubmit}
            onRememberMeChange={this.props.onRememberMeChange}
            isRememberMe={this.props.isRememberMe}/>
        }
      />
    );
  }
}

LoginContainer.propTypes = {
  onUserLoggedIn: PropTypes.func.isRequired,
  onRememberMeChange: PropTypes.func.isRequired,
  isRememberMe: PropTypes.bool.isRequired
};

export default LoginContainer;
