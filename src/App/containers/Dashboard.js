import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dashboard from '../pages/Dashboard';
import Sidenav from '../components/Layout/Sidenav';
import Header from '../components/Layout/Header';

const getSidenav = () => {
  return <Sidenav activeOne={'dashboard'}/>;
};

class DashboardContainer extends Component {
  getHeader() {
    const {onUserLoggedOut, userEmail} = this.props;

    return (
      <Header
        pageTitle="Dashboard"
        onUserLoggedOut={onUserLoggedOut}
        userEmail={userEmail}
      />
    );
  }

  render() {
    return <Dashboard sidenav={getSidenav()} header={this.getHeader()}/>;
  }
}

Dashboard.propTypes = {
  onUserLoggedOut: PropTypes.func,
  userEmail: PropTypes.string
};

export default DashboardContainer;
