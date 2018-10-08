import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import API from '../API';

import Login from './containers/Login';
import Applications from './containers/Applications';
import Dashboard from './containers/Dashboard';
import { getIsMobileViewport, viewportChange as viewportChangeImport } from './redux/ui/mobileViewport';

const isMobileViewportCheck = () => document.documentElement.clientWidth <= 768;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginData: JSON.parse(API.getPersistedData('loginData')),
      rememberMe: false,
    };

    this.onUserLoggedIn = this.onUserLoggedIn.bind(this);
    this.onUserLoggedOut = this.onUserLoggedOut.bind(this);
    this.onRememberMeChange = this.onRememberMeChange.bind(this);
  }

  componentDidMount() {
    const { viewportChange, isMobileViewport } = this.props;

    viewportChange(isMobileViewportCheck());

    window.addEventListener('resize', () => {
      if (isMobileViewport !== isMobileViewport()) {
        viewportChange();
      }
    });
  }

  onUserLoggedIn(loginData) {
    API.setPersistedData('loginData', JSON.stringify(loginData));
    this.setState({ loginData });
  }

  onUserLoggedOut() {
    API.removePersistedData('loginData');
    this.setState({ loginData: null });
  }

  onRememberMeChange() {
    let storage = window.sessionStorage;
    const { rememberMe } = this.state;

    this.setState(
      state => ({ rememberMe: !state.rememberMe }),
      () => {
        if (rememberMe) {
          storage = window.localStorage;
        }
        API.setStorage(storage);
      },
    );
  }

  getUserEmail() {
    const { loginData } = this.state;

    if (!loginData || !loginData.user) {
      return null;
    }

    return loginData.user.email;
  }

  renderApplicationsPage(props) {
    const { loginData } = this.state;

    return (
      <Applications
        {...props}
        user={loginData.user}
        onUserLoggedOut={this.onUserLoggedOut}
      />
    );
  }

  render() {
    const { loginData, rememberMe } = this.state;

    if (!loginData) {
      return (
        <Login
          isRememberMe={rememberMe}
          onUserLoggedIn={this.onUserLoggedIn}
          onRememberMeChange={this.onRememberMeChange}
        />
      );
    }

    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              this.renderApplicationsPage(props)
            )}
          />
          <Route
            path="/applications"
            render={props => (
              this.renderApplicationsPage(props)
            )}
          />
          <Route
            path="/dashboard"
            render={() => (
              <Dashboard
                onUserLoggedOut={this.onUserLoggedOut}
                userEmail={this.getUserEmail()}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

App.defaultProps = {
  viewportChange: null,
};

App.propTypes = {
  viewportChange: PropTypes.func,
};

const mapStateToProps = state => ({
  isMobileViewport: getIsMobileViewport(state),
});

const mapDispatchToProps = dispatch => ({
  viewportChange: bindActionCreators(viewportChangeImport, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
