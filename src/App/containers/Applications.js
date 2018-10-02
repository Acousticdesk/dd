import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import config from '../../../config';
import { getIdAppEdit } from '../redux/ui/Applications/editing';
import { getIdAppSelected } from '../redux/ui/Applications/selected';
import { placementSelect, getPlacementSelected } from '../redux/ui/Applications/placementSelect';
import { fetchApps, getApps } from '../redux/data/entities/apps';

import {
  placementSettingsChange,
  placementSettingsReset,
  rememberPlacementToGoAfterConfirm,
  getIdPlacementToGoAfterConfirm,
} from '../redux/ui/Applications/placementSettings';

import { getIsPlacementConfirmModal, placementConfirmModalHide } from '../redux/ui/Applications/isPlacementConfirmModal';

import Applications from '../pages/Applications';
import PlacementEdit from '../components/Page/Applications/PlacementEdit';
import Sidenav from '../components/Layout/Sidenav';
import Header from '../components/Layout/Header';
import SubHeader from '../components/Layout/SubHeader/index';
import AppModal from '../components/Page/Applications/AppModal';
import ApplicationsList from '../components/Page/Applications/ApplicationsList';
import PlacementDeleteModal from '../components/Page/Applications/PlacementDeleteModal';
import PlacementSaveModal from '../components/Page/Applications/PlacementSaveModal';
import { getIsLoaderApps } from '../redux/ui/Applications/loaderApps';
import { fetchSettingsApps, getSettingsApps } from '../redux/data/Applications/settings';
import { getIdPlacementToDelete, placementToDeleteUpdate } from '../redux/ui/Applications/placementToDelete';
import { getIsMobileSidebarShown, mobileSidebarToggle } from '../redux/ui/mobileSidebar';
import { getIsMobileViewport } from '../redux/ui/mobileViewport';

class ApplicationsContainer extends Component {
  componentDidMount() {
    this.props.fetchApps();
    this.props.fetchSettings();
  }

  getAppById = (id) => {
    return this.props.apps && this.props.apps[id];
  };

  getPlacementById = (appId, placementId) => {
    if (!this.props.apps || !appId) {
      return null;
    }
    if (!placementId) {
      return Object.entries(this.props.apps[appId].placements)[0][1];
    }
    return this.props.apps[appId].placements[placementId];
  };

  deletePlacement = (id) => (evt) => {
    evt.persist();
    evt.stopPropagation();

    this.props.placementToDeleteUpdate(id);
  };

  getHeader() {
    const isDarkTheme = this.props.isMobileViewport && this.props.isMobileSidebarShown;

    return (
      <Header
        isDarkTheme={isDarkTheme}
        mobileSidebarToggle={this.mobileSidebarToggle}
        userEmail={this.props.user.email}
        onUserLoggedOut={this.props.onUserLoggedOut}
        pageTitle="Applications"
      />
    );
  };

  getPlacementEdit() {
    const selectedApp = this.getAppById(this.props.idAppSelected);
    const selectedAppPlatform = selectedApp && selectedApp.platform;
    const selectedAppIntegration = selectedApp && selectedApp.integration;

    if (this.props.isMobileViewport && !this.props.placementSelected) {
      return null;
    }

    return (
      <PlacementEdit
        isMobile={this.props.isMobileViewport}
        settings={this.props.settings}
        selectedAppPlatform={selectedAppPlatform}
        selectedAppIntegration={selectedAppIntegration}
        selectedPlacement={this.props.placementSelected}
        onSettingsChange={this.onSettingsChange}
        close={this.placementSettingsClose}
      />
    );
  }

  getAppsList() {
    return (
      <ApplicationsList
        loader={this.props.isLoaderApps}
        apps={this.props.apps}
        deletePlacement={this.deletePlacement}
        selectedPlacement={this.props.placementSelected}
        zendesk={config.zendesk}
        onDeleteApp={this.onDeleteApp}
        getPlacementById={this.getPlacementById}
      />
    );
  }

  getAppModal() {
    const appToEdit = this.getAppById(this.props.idAppEdit);

    return <AppModal app={appToEdit} refreshAppsList={() => this.props.fetchApps()}/>;
  }

  getPlacementDeleteModal() {
    return this.props.idPlacementToDelete
      ? (
        <PlacementDeleteModal
          close={this.closePlacementDeleteModal}
          placementId={this.props.idPlacementToDelete}
        />
      )
      : null;
  }

  getPlacementSaveModal() {
    return this.props.isPlacementConfirmModal
      ? (
        <PlacementSaveModal
          close={this.closePlacementSaveModal}
          submitForm={this.submitPlacementEditForm}
          placementId={this.props.placementSelected.id}
        />
      )
      : null;
  }

  closePlacementDeleteModal = () => {
    this.props.placementToDeleteUpdate(null);
  };

  closePlacementSaveModal = () => {
    const placementToGoTo = this.getPlacementById(this.props.idAppSelected, this.props.idPlacementToGoAfterConfirm);

    this.props.placementSettingsReset();
    this.props.placementConfirmModalHide();
    this.props.placementSelect(placementToGoTo);
    this.props.rememberPlacementToGoAfterConfirm(null);
  };

  onDeleteApp(evt) {
    evt.persist();
    evt.stopPropagation();
    console.log('the app should be deleted');
  }

  onSettingsChange = () => {
    this.props.placementSettingsChange();
  };

  submitPlacementEditForm = () => {
    const {submitPlacementEditForm} = this.props;

    if (!submitPlacementEditForm && typeof submitPlacementEditForm !== 'function') {
      return;
    }

    submitPlacementEditForm();

    this.props.placementSettingsReset();
    this.props.placementConfirmModalHide();
  };

  placementSettingsClose = () => {
    this.props.placementSelect(null);
  };

  mobileSidebarToggle = () => {
    this.props.mobileSidebarToggle();
  };

  getSidenav() {
    const show = this.props.isMobileViewport && this.props.isMobileSidebarShown;

    return <Sidenav show={show} activeOne={'Applications'} />;
  }

  render() {
    return (
      <Applications
        sidenav={this.getSidenav()}
        header={this.getHeader()}
        subheader={<SubHeader/>}
        placementEdit={this.getPlacementEdit()}
        appsList={this.getAppsList()}
        appModal={this.getAppModal()}
        deletePlacementModal={this.getPlacementDeleteModal()}
        placementSaveModal={this.getPlacementSaveModal()}
      />
    );
  }
}

ApplicationsContainer.propTypes = {
  user: PropTypes.object,
  onUserLoggedOut: PropTypes.func,
  idAppEdit: PropTypes.number,
  idAppSelected: PropTypes.number,
  placementSelected: PropTypes.object,
  placementSelect: PropTypes.func,
  isPlacementConfirmModal: PropTypes.bool,
  placementConfirmModalHide: PropTypes.func,
  rememberPlacementToGoAfterConfirm: PropTypes.func,
  fetchApps: PropTypes.func,
  apps: PropTypes.object,
  isLoaderApps: PropTypes.bool,
  fetchSettings: PropTypes.func,
  placementToDeleteUpdate: PropTypes.func,
  idPlacementToDelete: PropTypes.number,
  isMobileSidebarShown: PropTypes.bool,
  mobileSidebarToggle: PropTypes.func,
  isMobileViewport: PropTypes.bool,
};

const mapStateToProps = state => ({
  idAppEdit: getIdAppEdit(state),
  idAppSelected: getIdAppSelected(state),
  placementSelected: getPlacementSelected(state),
  isPlacementConfirmModal: getIsPlacementConfirmModal(state),
  idPlacementToGoAfterConfirm: getIdPlacementToGoAfterConfirm(state),
  apps: getApps(state),
  isLoaderApps: getIsLoaderApps(state),
  settings: getSettingsApps(state),
  idPlacementToDelete: getIdPlacementToDelete(state),
  isMobileSidebarShown: getIsMobileSidebarShown(state),
  isMobileViewport: getIsMobileViewport(state),
});

const mapDispatchToProps = dispatch => ({
  submitPlacementEditForm: bindActionCreators(() => submit('placementSettings'), dispatch),
  placementSelect: bindActionCreators(placementSelect, dispatch),
  placementSettingsChange: bindActionCreators(placementSettingsChange, dispatch),
  placementSettingsReset: bindActionCreators(placementSettingsReset, dispatch),
  placementConfirmModalHide: bindActionCreators(placementConfirmModalHide, dispatch),
  rememberPlacementToGoAfterConfirm: bindActionCreators(rememberPlacementToGoAfterConfirm, dispatch),
  fetchApps: bindActionCreators(fetchApps, dispatch),
  fetchSettings: bindActionCreators(fetchSettingsApps, dispatch),
  placementToDeleteUpdate: bindActionCreators(placementToDeleteUpdate, dispatch),
  mobileSidebarToggle: bindActionCreators(mobileSidebarToggle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsContainer);
