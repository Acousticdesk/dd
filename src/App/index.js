import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import API from '../API';

import Login from './containers/Login';
import Applications from './containers/Applications';
import Dashboard from './containers/Dashboard';
import { getIsMobileViewport, viewportChange } from './redux/ui/mobileViewport';

const isMobileViewport = () => {
  return document.documentElement.clientWidth <= 768;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: JSON.parse(API.getPersistedData('loginData')),
      rememberMe: false
    };
  }

  componentDidMount() {
    this.props.viewportChange(isMobileViewport());

    window.addEventListener('resize', () => {
      if (this.props.isMobileViewport !== isMobileViewport()) {
        this.props.viewportChange();
      }
    });
  }

  onUserLoggedIn = (loginData) => {
    API.setPersistedData('loginData', JSON.stringify(loginData));
    this.setState({loginData});
  };

  onUserLoggedOut = () => {
    API.removePersistedData('loginData');
    this.setState({loginData: null});
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

  getUserEmail() {
    if (!this.state.loginData || !this.state.loginData.user) {
      return null;
    }

    return this.state.loginData.user.email;
  }

  renderApplicationsPage(props) {
    return (
      <Applications
        {...props}
        user={this.state.loginData.user}
        onUserLoggedOut={this.onUserLoggedOut}
      />
    );
  }

  render() {
    if (!this.state.loginData) {
      return (
        <Login
          isRememberMe={this.state.rememberMe}
          onUserLoggedIn={this.onUserLoggedIn}
          onRememberMeChange={this.onRememberMeChange}
        />
      );
    }

    return (
      <Router>
        <Switch>
          <Route path="/" exact render={props => (
            this.renderApplicationsPage(props)
          )}/>
          <Route path="/applications" render={props => (
            this.renderApplicationsPage(props)
          )}/>
          <Route path="/dashboard" render={props => (
            <Dashboard
              onUserLoggedOut={this.onUserLoggedOut}
              userEmail={this.getUserEmail()}/>
          )}/>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  viewportChange: PropTypes.func,
};

const mapStateToProps = state => ({
  isMobileViewport: getIsMobileViewport(state),
});

const mapDispatchToProps = dispatch => ({
  viewportChange: bindActionCreators(viewportChange, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
