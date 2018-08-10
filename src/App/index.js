import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginContainer from './containers/Login';
import Applications from './pages/Applications';
import config from '../../config';

export default class App extends Component {
  state = {loginData: null};

  onUserLoggedIn = (loginData) => {
    this.setState({loginData});
    window.sessionStorage.setItem('token', loginData.token);
  };

  static request(apiMethod, reqMethod = 'GET', body) {
    const headers = {
      'Content-Type': 'application/json'
    };

    const token = window.sessionStorage.getItem('token');

    if (token) {
      headers['Authorization'] = `Bearer ${window.sessionStorage.getItem('token')}`;
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
