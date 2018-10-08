import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import { placementSelect as placementSelectImport, getPlacementSelected } from '../redux/ui/Applications/placementSelect';
import { fetchApps as fetchAppsImport } from '../redux/data/entities/apps';
import { getPlacementById as getPlacementByIdImport } from '../redux/data/entities/placements';

import {
  placementSettingsReset,
  rememberPlacementToGoAfterConfirm as rememberPlacementToGoAfterConfirmImport,
  getIdPlacementToGoAfterConfirm,
} from '../redux/ui/Applications/placementSettings';

import { getIsPlacementConfirmModal, placementConfirmModalHide } from '../redux/ui/Applications/isPlacementConfirmModal';

import Applications from '../pages/Applications';
import Sidenav from '../components/Layout/Sidenav';
import SubHeader from '../components/Layout/SubHeader/index';
import PlacementDeleteModal from '../components/Page/Applications/PlacementDeleteModal';
import PlacementSaveModal from '../components/Page/Applications/PlacementSaveModal';
import { fetchSettingsApps } from '../redux/data/Applications/settings';
import { getIdPlacementToDelete, placementToDeleteUpdate as placementToDeleteUpdateImport } from '../redux/ui/Applications/placementToDelete';
import { getIsMobileSidebarShown } from '../redux/ui/mobileSidebar';
import { getIsMobileViewport } from '../redux/ui/mobileViewport';

class ApplicationsContainer extends Component {
  constructor(props) {
    super(props);

    this.closePlacementDeleteModal = this.closePlacementDeleteModal.bind(this);
    this.closePlacementSaveModal = this.closePlacementSaveModal.bind(this);
    this.submitPlacementEditForm = this.submitPlacementEditForm.bind(this);
  }

  componentDidMount() {
    const { fetchApps, fetchSettings } = this.props;

    fetchApps();
    fetchSettings();
  }

  getPlacementDeleteModal() {
    const { idPlacementToDelete } = this.props;

    return idPlacementToDelete
      ? (
        <PlacementDeleteModal
          close={this.closePlacementDeleteModal}
          placementId={idPlacementToDelete}
        />
      )
      : null;
  }

  getPlacementSaveModal() {
    const { isPlacementConfirmModal, placementSelected } = this.props;

    return isPlacementConfirmModal
      ? (
        <PlacementSaveModal
          close={this.closePlacementSaveModal}
          submitForm={this.submitPlacementEditForm}
          placementId={placementSelected.id}
        />
      )
      : null;
  }

  getSidenav() {
    const { isMobileViewport, isMobileSidebarShown } = this.props;
    const show = isMobileViewport && isMobileSidebarShown;

    return <Sidenav show={show} activeOne="Applications" />;
  }

  closePlacementDeleteModal() {
    const { placementToDeleteUpdate } = this.props;

    placementToDeleteUpdate(null);
  }

  closePlacementSaveModal() {
    const {
      getPlacementById,
      idPlacementToGoAfterConfirm,
      resetPlacementSettings,
      hidePlacementConfirmModal,
      placementSelect,
      rememberPlacementToGoAfterConfirm,
    } = this.props;

    const placementToGoTo = getPlacementById(idPlacementToGoAfterConfirm);

    resetPlacementSettings();
    hidePlacementConfirmModal();
    placementSelect(placementToGoTo);
    rememberPlacementToGoAfterConfirm(null);
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
        deletePlacementModal={this.getPlacementDeleteModal()}
        placementSaveModal={this.getPlacementSaveModal()}
        userEmail={user.email}
        onUserLoggedOut={onUserLoggedOut}
      />
    );
  }
}

ApplicationsContainer.defaultProps = {
  user: null,
  onUserLoggedOut: null,
  placementSelected: null,
  placementSelect: null,
  isPlacementConfirmModal: null,
  hidePlacementConfirmModal: null,
  rememberPlacementToGoAfterConfirm: null,
  fetchApps: null,
  fetchSettings: null,
  placementToDeleteUpdate: null,
  idPlacementToDelete: null,
  isMobileSidebarShown: null,
  isMobileViewport: null,
  getPlacementById: null,
  submitPlacementEditForm: null,
  resetPlacementSettings: null,
  idPlacementToGoAfterConfirm: null,
};

ApplicationsContainer.propTypes = {
  user: PropTypes.shape({ email: PropTypes.string }),
  onUserLoggedOut: PropTypes.func,
  placementSelected: PropTypes.shape(),
  placementSelect: PropTypes.func,
  isPlacementConfirmModal: PropTypes.bool,
  hidePlacementConfirmModal: PropTypes.func,
  rememberPlacementToGoAfterConfirm: PropTypes.func,
  fetchApps: PropTypes.func,
  fetchSettings: PropTypes.func,
  placementToDeleteUpdate: PropTypes.func,
  idPlacementToDelete: PropTypes.number,
  isMobileSidebarShown: PropTypes.bool,
  isMobileViewport: PropTypes.bool,
  getPlacementById: PropTypes.func,
  submitPlacementEditForm: PropTypes.func,
  resetPlacementSettings: PropTypes.func,
  idPlacementToGoAfterConfirm: PropTypes.number,
};

const mapStateToProps = state => ({
  placementSelected: getPlacementSelected(state),
  isPlacementConfirmModal: getIsPlacementConfirmModal(state),
  idPlacementToGoAfterConfirm: getIdPlacementToGoAfterConfirm(state),
  idPlacementToDelete: getIdPlacementToDelete(state),
  isMobileSidebarShown: getIsMobileSidebarShown(state),
  isMobileViewport: getIsMobileViewport(state),
  getPlacementById: getPlacementByIdImport(state),
});

const mapDispatchToProps = dispatch => ({
  submitPlacementEditForm: bindActionCreators(() => submit('placementSettings'), dispatch),
  placementSelect: bindActionCreators(placementSelectImport, dispatch),
  resetPlacementSettings: bindActionCreators(placementSettingsReset, dispatch),
  hidePlacementConfirmModal: bindActionCreators(placementConfirmModalHide, dispatch),
  rememberPlacementToGoAfterConfirm:
    bindActionCreators(rememberPlacementToGoAfterConfirmImport, dispatch),
  fetchApps: bindActionCreators(fetchAppsImport, dispatch),
  fetchSettings: bindActionCreators(fetchSettingsApps, dispatch),
  placementToDeleteUpdate: bindActionCreators(placementToDeleteUpdateImport, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsContainer);
