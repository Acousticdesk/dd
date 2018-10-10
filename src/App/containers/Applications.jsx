import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchApps as fetchAppsImport } from '../redux/data/entities/apps';

import Applications from '../pages/Applications';
import SubHeader from '../components/Layout/SubHeader/index';
import { fetchSettingsApps } from '../redux/data/Applications/settings';

class ApplicationsContainer extends Component {
  componentDidMount() {
    const { fetchApps, fetchSettings } = this.props;

    fetchApps();
    fetchSettings();
  }

  render() {
    const { user, onUserLoggedOut } = this.props;

    return (
      <Applications
        subheader={<SubHeader />}
        userEmail={user.email}
        onUserLoggedOut={onUserLoggedOut}
      />
    );
  }
}

ApplicationsContainer.defaultProps = {
  user: null,
  onUserLoggedOut: null,
  fetchApps: null,
  fetchSettings: null,
};

ApplicationsContainer.propTypes = {
  user: PropTypes.shape({ email: PropTypes.string }),
  onUserLoggedOut: PropTypes.func,
  fetchApps: PropTypes.func,
  fetchSettings: PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchApps: bindActionCreators(fetchAppsImport, dispatch),
  fetchSettings: bindActionCreators(fetchSettingsApps, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsContainer);
