import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Login from '../pages/Login';
import API from '../../API';
import LoginForm from '../components/Page/Login/LoginForm';

const loginRequest = (email, password) => API.request('auth', 'POST', { email, password })
  .then((res) => {
    if (res.status !== 200) {
      throw new Error(res.status);
    }

    return res.json();
  });

class LoginContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { loader: false };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ email, password }) {
    this.setState({ loader: true });

    const { onUserLoggedIn } = this.props;

    loginRequest(email, password)
      .finally(() => this.setState({ loader: false }))
      .then(loginData => onUserLoggedIn(loginData))
      .catch((err) => {
        let msg = '';

        switch (err.message) {
          case '401':
            msg = 'No account found with presented credentials. Please, try again';
            break;
          default:
            msg = 'Ooops... Something went wrong';
        }

        console.error(msg);
      });
  }

  render() {
    const { onRememberMeChange, isRememberMe } = this.props;
    const { loader } = this.state;

    return (
      <Login
        loginForm={(
          <LoginForm
            loader={loader}
            onSubmit={this.onSubmit}
            onRememberMeChange={onRememberMeChange}
            isRememberMe={isRememberMe}
          />
        )}
      />
    );
  }
}

LoginContainer.propTypes = {
  onUserLoggedIn: PropTypes.func.isRequired,
  onRememberMeChange: PropTypes.func.isRequired,
  isRememberMe: PropTypes.bool.isRequired,
};

export default LoginContainer;
