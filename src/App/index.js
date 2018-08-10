import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import LoginContainer from './containers/Login';
import Applications from './pages/Applications';

export default class App extends Component {
  state = {loginData: null};

  onUserLoggedIn = (loginData) => {
    this.setState({loginData});
  };

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
