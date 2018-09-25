import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import API from '../../API';
import config from '../../../config';
import { getIdAppEdit } from '../redux/data/Applications/appEdit';
import { getIdAppSelected } from '../redux/data/Applications/appSelect';
import { placementSelect, getPlacementSelected } from '../redux/data/Applications/placementSelect';

import {
  placementSettingsChange,
  placementSettingsReset,
  rememberPlacementToGoAfterConfirm,
  getIdPlacementToGoAfterConfirm,
} from '../redux/data/Applications/placementSettings';

import { getIsPlacementConfirmModal, placementConfirmModalHide } from '../redux/data/Applications/isPlacementConfirmModal';

import Applications from '../pages/Applications';
import PlacementEdit from '../components/Page/Applications/PlacementEdit';
import Sidenav from '../components/Layout/Sidenav';
import Header from '../components/Layout/Header';
import SubHeader from '../components/Layout/SubHeader/index';
import AppModal from '../components/Page/Applications/AppModal';
import ApplicationsList from '../components/Page/Applications/ApplicationsList';
import PlacementDeleteModal from '../components/Page/Applications/PlacementDeleteModal';
import PlacementSaveModal from '../components/Page/Applications/PlacementSaveModal';

const isMobile = () => {
  return document.documentElement.clientWidth <= 768;
};

class ApplicationsContainer extends Component {
  state = {
    apps: null,
    settings: null,
    placementToDelete: null,
    placementToLinkAfterSaveModal: null,
    mobileSidebarShow: false,
    isMobile: false,
    appsLoading: false,
  };

  componentDidMount() {
    this.setState({appsLoading: true});

    this.getApps();
    API.request('getSettings')
      .then(res => res.json())
      .then(settings => this.setState({settings: settings.adUnitTypes}));

    this.setState({isMobile: isMobile()});

    window.addEventListener('resize', () => this.setState({isMobile: isMobile()}))
  }

  getAppById = (id) => {
    return this.state.apps && this.state.apps[id];
  };

  getPlacementById = (appId, placementId) => {
    if (!this.state.apps || !appId) {
      return null;
    }
    if (!placementId) {
      return Object.entries(this.state.apps[appId].placements)[0][1];
    }
    return this.state.apps[appId].placements[placementId];
  };

  deletePlacement = (id) => (evt) => {
    evt.persist();
    evt.stopPropagation();

    this.setState({
      placementToDelete: id
    });
  };

  getHeader() {
    const isDarkTheme = this.state.isMobile && this.state.mobileSidebarShow;

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

    if (this.state.isMobile && !this.props.placementSelected) {
      return null;
    }

    return (
      <PlacementEdit
        isMobile={this.state.isMobile}
        settings={this.state.settings}
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
        loader={this.state.appsLoading}
        apps={this.state.apps}
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

    return <AppModal app={appToEdit} refreshAppsList={this.getApps}/>;
  }

  getPlacementDeleteModal() {
    return this.state.placementToDelete
      ? (
        <PlacementDeleteModal
          close={this.closePlacementDeleteModal}
          placementId={this.state.placementToDelete}
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
    this.setState({
      placementToDelete: null
    });
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
    this.setState(state => {
      this.setState({mobileSidebarShow: !state.mobileSidebarShow});
    });
  };

  getSidenav() {
    const show = this.state.isMobile && this.state.mobileSidebarShow;

    return <Sidenav show={show} activeOne={'Applications'} />;
  }

  getApps = () => {
    return API.request('getApps')
      .finally(() => this.setState({appsLoading: false}))
      .then(res => res.json())
      .then(appsData => this.setState({apps: appsData.results}));
  };

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
};

const mapStateToProps = state => ({
  idAppEdit: getIdAppEdit(state),
  idAppSelected: getIdAppSelected(state),
  placementSelected: getPlacementSelected(state),
  isPlacementConfirmModal: getIsPlacementConfirmModal(state),
  idPlacementToGoAfterConfirm: getIdPlacementToGoAfterConfirm(state),
});

const mapDispatchToProps = dispatch => ({
  submitPlacementEditForm: bindActionCreators(() => submit('placementSettings'), dispatch),
  placementSelect: bindActionCreators(placementSelect, dispatch),
  placementSettingsChange: bindActionCreators(placementSettingsChange, dispatch),
  placementSettingsReset: bindActionCreators(placementSettingsReset, dispatch),
  placementConfirmModalHide: bindActionCreators(placementConfirmModalHide, dispatch),
  rememberPlacementToGoAfterConfirm: bindActionCreators(rememberPlacementToGoAfterConfirm, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsContainer);
