import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Login from '../pages/Login';
import App from '../../App';

const loginRequest = (email, password) => {
  return App.request('auth', 'POST', {email, password})
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.status)
      }

      return res.json();
    });
};

class LoginContainer extends Component {
  state = {email: '', password: ''};

  tryLogin = () => {
    const {email, password} = this.state;
    loginRequest(email, password)
      .then(loginData => this.props.onUserLoggedIn(loginData))
      .catch((err) => {
        let msg = '';

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

  onUserType = (evt) => {
    const field = evt.target.name;
    const value = evt.target.value;

    this.setState({
      [field]: value
    });
  };

  render() {
    return (
      <Login onTryLogin={this.tryLogin} onUserType={this.onUserType}/>
    );
  }
}

LoginContainer.propTypes = {
  onUserLoggedIn: PropTypes.func.isRequired
};

export default LoginContainer;
