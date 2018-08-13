import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginContainer from './containers/Login';
import Applications from './pages/Applications';
import API from '../API';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: JSON.parse(API.getPersistedData('loginData')),
      rememberMe: false
    };
  }

  onUserLoggedIn = (loginData) => {
    this.setState({loginData});
    API.setPersistedData('loginData', JSON.stringify(loginData));
  };

  onRememberMeChange = () => {
    let storage = window.sessionStorage;

    this.setState(
      (prevState) => ({rememberMe: !prevState.rememberMe}),
      () => {
        if (this.state.rememberMe) {
          storage = window.localStorage;
        }
        API.setStorage(storage);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact render={props => {
            return !this.state.loginData ?
              <LoginContainer
                {...props}
                isRememberMe={this.state.rememberMe}
                onUserLoggedIn={this.onUserLoggedIn}
                onRememberMeChange={this.onRememberMeChange}/> :
              <Applications {...props} user={this.state.loginData.user}/>
          }}/>
          <Route path="/applications" component={Applications}/>
        </Switch>
      </React.Fragment>
    );
  }
};
