import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginContainer from './containers/Login';
import Applications from './pages/Applications';
import config from '../../config';

export default class App extends Component {
  state = {loginData: JSON.parse(window.sessionStorage.getItem('loginData'))};

  onUserLoggedIn = (loginData) => {
    this.setState({loginData});
    window.sessionStorage.setItem('loginData', JSON.stringify(loginData));
  };

  static request(apiMethod, reqMethod = 'GET', body) {
    const headers = {
      'Content-Type': 'application/json'
    };
    const persistedLoginData = window.sessionStorage.getItem('loginData');
    let token;

    if (persistedLoginData) {
      token = JSON.parse(persistedLoginData).token;
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const fetchOptions = {
      headers,
      method: reqMethod
    };

    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    return fetch(config.endpoint + apiMethod, fetchOptions)
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact render={props => {
            return !this.state.loginData ?
              <LoginContainer {...props} onUserLoggedIn={this.onUserLoggedIn}/> :
              <Applications {...props} user={this.state.loginData.user}/>
          }}/>
          <Route path="/applications" component={Applications}/>
        </Switch>
      </React.Fragment>
    );
  }
};
