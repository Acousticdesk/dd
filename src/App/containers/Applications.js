import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import config from '../../../config';
import { getIdAppEdit } from '../redux/ui/Applications/editing';
import { placementSelect, getPlacementSelected } from '../redux/ui/Applications/placementSelect';
import { fetchApps, getAppById, getApps, getPlacementById } from '../redux/data/entities/apps';

import {
  placementSettingsReset,
  rememberPlacementToGoAfterConfirm,
  getIdPlacementToGoAfterConfirm,
} from '../redux/ui/Applications/placementSettings';

import { getIsPlacementConfirmModal, placementConfirmModalHide } from '../redux/ui/Applications/isPlacementConfirmModal';

import Applications from '../pages/Applications';
import Sidenav from '../components/Layout/Sidenav';
import SubHeader from '../components/Layout/SubHeader/index';
import AppModal from '../components/Page/Applications/AppModal';
import ApplicationsList from '../components/Page/Applications/ApplicationsList';
import PlacementDeleteModal from '../components/Page/Applications/PlacementDeleteModal';
import PlacementSaveModal from '../components/Page/Applications/PlacementSaveModal';
import { getIsLoaderApps } from '../redux/ui/Applications/loaderApps';
import { fetchSettingsApps } from '../redux/data/Applications/settings';
import { getIdPlacementToDelete, placementToDeleteUpdate } from '../redux/ui/Applications/placementToDelete';
import { getIsMobileSidebarShown } from '../redux/ui/mobileSidebar';
import { getIsMobileViewport } from '../redux/ui/mobileViewport';

class ApplicationsContainer extends Component {
  componentDidMount() {
    this.props.fetchApps();
    this.props.fetchSettings();
  }

  getAppsList() {
    return (
      <ApplicationsList
        loader={this.props.isLoaderApps}
        apps={this.props.apps}
        selectedPlacement={this.props.placementSelected}
        zendesk={config.zendesk}
        onDeleteApp={this.onDeleteApp}
        getPlacementById={this.props.getPlacementById}
      />
    );
  }

  getAppModal() {
    const appToEdit = this.props.getAppById(this.props.idAppEdit);

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
    const placementToGoTo = this.props.getPlacementById(this.props.idPlacementToGoAfterConfirm);

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

  submitPlacementEditForm = () => {
    const {submitPlacementEditForm} = this.props;

    if (!submitPlacementEditForm && typeof submitPlacementEditForm !== 'function') {
      return;
    }

    submitPlacementEditForm();

    this.props.placementSettingsReset();
    this.props.placementConfirmModalHide();
  };

  getSidenav() {
    const show = this.props.isMobileViewport && this.props.isMobileSidebarShown;

    return <Sidenav show={show} activeOne={'Applications'} />;
  }

  render() {
    return (
      <Applications
        sidenav={this.getSidenav()}
        subheader={<SubHeader/>}
        appsList={this.getAppsList()}
        appModal={this.getAppModal()}
        deletePlacementModal={this.getPlacementDeleteModal()}
        placementSaveModal={this.getPlacementSaveModal()}
        userEmail={this.props.user.email}
        onUserLoggedOut={this.props.onUserLoggedOut}
      />
    );
  }
}

ApplicationsContainer.propTypes = {
  user: PropTypes.object,
  onUserLoggedOut: PropTypes.func,
  idAppEdit: PropTypes.number,
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
  isMobileViewport: PropTypes.bool,
  getAppById: PropTypes.func,
  getPlacementById: PropTypes.func,
};

const mapStateToProps = state => ({
  idAppEdit: getIdAppEdit(state),
  placementSelected: getPlacementSelected(state),
  isPlacementConfirmModal: getIsPlacementConfirmModal(state),
  idPlacementToGoAfterConfirm: getIdPlacementToGoAfterConfirm(state),
  apps: getApps(state),
  isLoaderApps: getIsLoaderApps(state),
  idPlacementToDelete: getIdPlacementToDelete(state),
  isMobileSidebarShown: getIsMobileSidebarShown(state),
  isMobileViewport: getIsMobileViewport(state),
  getAppById: getAppById(state),
  getPlacementById: getPlacementById(state),
});

const mapDispatchToProps = dispatch => ({
  submitPlacementEditForm: bindActionCreators(() => submit('placementSettings'), dispatch),
  placementSelect: bindActionCreators(placementSelect, dispatch),
  placementSettingsReset: bindActionCreators(placementSettingsReset, dispatch),
  placementConfirmModalHide: bindActionCreators(placementConfirmModalHide, dispatch),
  rememberPlacementToGoAfterConfirm: bindActionCreators(rememberPlacementToGoAfterConfirm, dispatch),
  fetchApps: bindActionCreators(fetchApps, dispatch),
  fetchSettings: bindActionCreators(fetchSettingsApps, dispatch),
  placementToDeleteUpdate: bindActionCreators(placementToDeleteUpdate, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsContainer);
