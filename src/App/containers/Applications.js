import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import API from '../../API';
import config from '../../../config';
import { editApp } from '../redux/reducer';

import Applications from '../pages/Applications';
import PlacementEdit from '../components/Pages/Applications/PlacementEdit';
import Sidenav from '../components/Layout/Sidenav';
import Header from '../components/Layout/Header';
import SubHeader from '../components/Layout/SubHeader';
import AppModal from '../components/Pages/Applications/AppModal';
import ApplicationsList from '../components/Pages/Applications/ApplicationsList';
import PlacementDeleteModal from '../components/Pages/Applications/PlacementDeleteModal';
import PlacementSaveModal from '../components/Pages/Applications/PlacementSaveModal';

const getSidenav = () => (
  <Sidenav activeOne={'apps'}/>
);

class ApplicationsContainer extends Component {
  state = {
    selectedApp: null,
    selectedPlacement: null,
    isCreatingNewApp: false,
    apps: null,
    settings: null,
    placementToDelete: null,
    placementSettingsChanged: false,
    placementSaveModalShow: false,
    placementToLinkAfterSaveModal: null,
  };

  selectApp = (id) => () => {
    if (id === this.state.selectedApp) {
      this.setState({selectedApp: null});
      return;
    }

    this.setState({selectedApp: id});
  };

  showApplicationModal = () => {
    this.setState({
      isCreatingNewApp: true
    });
  };

  // TODO: Implement proper property names
  hideApplicationModal = () => {
    this.setState({
      isCreatingNewApp: false,
    });

    this.props.editApp(null);
  };

  componentDidMount() {
    API.request('getApps')
      .then(res => res.json())
      .then(appsData => this.setState({apps: appsData.results}));
    API.request('getSettings')
      .then(res => res.json())
      .then(settings => this.setState({settings: settings.adUnitTypes}));
  }

  getAppById(id) {
    return this.state.apps && this.state.apps[id];
  }

  getPlacementById(appId, placementId) {
    if (!this.state.apps || !appId) {
      return null;
    }
    if (!placementId) {
      return Object.entries(this.state.apps[appId].placements)[0][1];
    }
    return this.state.apps[appId].placements[placementId];
  }

  selectPlacement = (id) => () => {
    if (this.state.placementSettingsChanged) {
      this.setState({
        placementSaveModalShow: true,
        placementToLinkAfterSaveModal: id
      });

      return;
    }

    this.setState({
      selectedPlacement: this.getPlacementById(this.state.selectedApp, id)
    });
  };

  deletePlacement = (id) => () => {
    this.setState({
      placementToDelete: id
    });
  };

  getHeader() {
    return (
      <Header
        userEmail={this.props.user.email}
        onUserLoggedOut={this.props.onUserLoggedOut}
        pageTitle="Applications"
      />
    );
  };

  getSubheader() {
    return (
      <SubHeader onCreateAppClick={this.showApplicationModal}/>
    );
  }

  getPlacementEdit() {
    const selectedApp = this.getAppById(this.state.selectedApp);
    const selectedAppIntegration = selectedApp && selectedApp.integration;

    return (
      <PlacementEdit
        settings={this.state.settings}
        selectedAppIntegration={selectedAppIntegration}
        selectedPlacement={this.state.selectedPlacement}
        onSettingsChange={this.onSettingsChange}
      />
    );
  }

  getAppsList() {
    return (
      <ApplicationsList
        apps={this.state.apps}
        deletePlacement={this.deletePlacement}
        selectPlacement={this.selectPlacement}
        selectedPlacement={this.state.selectedPlacement}
        selectedApp={this.state.selectedApp}
        select={this.selectApp}
        zendesk={config.zendesk}
        onEditApp={this.onEditApp}
        onDeleteApp={this.onDeleteApp}
      />
    );
  }

  getAppModal() {
    const app = this.getAppById(this.props.idAppEdit);
    const title = app ? 'Edit Application' : 'New Application';

    return this.state.isCreatingNewApp || this.props.idAppEdit
      ? <AppModal close={this.hideApplicationModal} app={app} title={title} />
      : null;
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
    return this.state.placementSaveModalShow
      ? (
        <PlacementSaveModal
          close={this.closePlacementSaveModal}
          submitForm={this.submitPlacementEditForm}
          placementId={this.state.selectedPlacement.id}
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
    this.setState({
      placementSaveModalShow: false,
      placementSettingsChanged: false,
    }, () => {
      this.selectPlacement(this.state.placementToLinkAfterSaveModal)();
      this.setState({placementToLinkAfterSaveModal: null});
    });
  };

  onEditApp = (id) => (evt) => {
    evt.persist();
    evt.stopPropagation();
    this.props.editApp(id);
  };

  onDeleteApp(evt) {
    evt.persist();
    evt.stopPropagation();
    console.log('the app should be deleted');
  }

  onSettingsChange = () => {
    console.log('Wow, my first Hoc works really well!');
    this.setState({
      placementSettingsChanged: true
    });
  };

  submitPlacementEditForm = () => {
    const {submitPlacementEditForm} = this.props;

    if (!submitPlacementEditForm && typeof submitPlacementEditForm !== 'function') {
      return;
    }

    submitPlacementEditForm();

    this.setState({
      placementSaveModalShow: false,
      placementSettingsChanged: false,
    });
  };

  render() {
    return (
      <Applications
        sidenav={getSidenav()}
        header={this.getHeader()}
        subheader={this.getSubheader()}
        placementEdit={this.getPlacementEdit()}
        appsList={this.getAppsList()}
        showApplicationModal={this.showApplicationModal}
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
  editApp: PropTypes.func
};

const mapStateToProps = state => ({
  idAppEdit: state.app.idAppEdit
});

const mapDispatchToProps = dispatch => ({
  editApp: bindActionCreators(editApp, dispatch),
  submitPlacementEditForm: bindActionCreators(() => submit('placementSettings'), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsContainer);
