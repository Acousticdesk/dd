import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import { fetchApps as fetchAppsImport } from '../redux/data/entities/apps';
import { placementSettingsReset } from '../redux/ui/Applications/placementSettings';
import { placementConfirmModalHide } from '../redux/ui/Applications/isPlacementConfirmModal';

import Applications from '../pages/Applications';
import Sidenav from '../components/Layout/Sidenav';
import SubHeader from '../components/Layout/SubHeader/index';
import { fetchSettingsApps } from '../redux/data/Applications/settings';
import { getIsMobileSidebarShown } from '../redux/ui/mobileSidebar';
import { getIsMobileViewport } from '../redux/ui/mobileViewport';

class ApplicationsContainer extends Component {
  constructor(props) {
    super(props);

    this.submitPlacementEditForm = this.submitPlacementEditForm.bind(this);
  }

  componentDidMount() {
    const { fetchApps, fetchSettings } = this.props;

    fetchApps();
    fetchSettings();
  }

  getSidenav() {
    const { isMobileViewport, isMobileSidebarShown } = this.props;
    const show = isMobileViewport && isMobileSidebarShown;

    return <Sidenav show={show} activeOne="Applications" />;
  }

  submitPlacementEditForm() {
    const {
      submitPlacementEditForm,
      resetPlacementSettings,
      hidePlacementConfirmModal,
    } = this.props;

    if (!submitPlacementEditForm && typeof submitPlacementEditForm !== 'function') {
      return;
    }

    submitPlacementEditForm();

    resetPlacementSettings();
    hidePlacementConfirmModal();
  }

  render() {
    const { user, onUserLoggedOut } = this.props;

    return (
      <Applications
        sidenav={this.getSidenav()}
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
  isMobileSidebarShown: null,
  isMobileViewport: null,
  submitPlacementEditForm: null,
  resetPlacementSettings: null,
  hidePlacementConfirmModal: null,
};

ApplicationsContainer.propTypes = {
  user: PropTypes.shape({ email: PropTypes.string }),
  onUserLoggedOut: PropTypes.func,
  fetchApps: PropTypes.func,
  fetchSettings: PropTypes.func,
  isMobileSidebarShown: PropTypes.bool,
  isMobileViewport: PropTypes.bool,
  hidePlacementConfirmModal: PropTypes.func,
  submitPlacementEditForm: PropTypes.func,
  resetPlacementSettings: PropTypes.func,
};

const mapStateToProps = state => ({
  isMobileSidebarShown: getIsMobileSidebarShown(state),
  isMobileViewport: getIsMobileViewport(state),
});

const mapDispatchToProps = dispatch => ({
  submitPlacementEditForm: bindActionCreators(() => submit('placementSettings'), dispatch),
  resetPlacementSettings: bindActionCreators(placementSettingsReset, dispatch),
  fetchApps: bindActionCreators(fetchAppsImport, dispatch),
  hidePlacementConfirmModal: bindActionCreators(placementConfirmModalHide, dispatch),
  fetchSettings: bindActionCreators(fetchSettingsApps, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsContainer);
