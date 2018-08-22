import PropTypes from 'prop-types';
import React, { Component } from 'react';

import API from '../../API';
import config from '../../../config';
import Applications from '../pages/Applications';
import PlacementEdit from '../components/Pages/Applications/PlacementEdit';
import Sidenav from '../components/Layout/Sidenav';
import Header from '../components/Layout/Header';
import SubHeader from '../components/Layout/SubHeader';
import NewApp from '../components/Pages/Applications/NewApp';
import ApplicationsList from '../components/Pages/Applications/ApplicationsList';
import DeletePlacementModal from '../components/Pages/Applications/DeletePlacementModal';

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
    placementToDelete: null
  };

  selectApp = (id) => () => {
    this.setState({
      selectedApp: id
    });
  };

  showApplicationModal = () => {
    this.setState({
      isCreatingNewApp: true
    });
  };

  hideApplicationModal = () => {
    this.setState({
      isCreatingNewApp: false
    });
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
    this.setState({
      selectedPlacement: this.getPlacementById(this.state.selectedApp, id)
    });
  };

  deletePlacement = (id) => () => {
    this.setState({
      placementToDelete: id
    });
  };

  onPlacementEdit = (field) => {
    this.setState({
      selectedPlacement: {
        ...this.state.selectedPlacement,
        [field.name]: field.value
      }
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
        onPlacementEdit={this.onPlacementEdit}
        selectedAppIntegration={selectedAppIntegration}
        selectedPlacement={this.state.selectedPlacement}/>
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
        zendesk={config.zendesk}/>
    );
  }

  getAppModal() {
    return this.state.isCreatingNewApp ? <NewApp close={this.hideApplicationModal}/> : null;
  }

  getDeletePlacementModal() {
    return this.state.placementToDelete
      ? (
        <DeletePlacementModal
          close={this.closeDeletePlacementModal}
          placementId={this.state.placementToDelete}
        />
      )
      : null;
  }

  closeDeletePlacementModal = () => {
    this.setState({
      placementToDelete: null
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
        createAppModal={this.getAppModal()}
        deletePlacementModal={this.getDeletePlacementModal()}
      />
    );
  }
}

ApplicationsContainer.propTypes = {
  user: PropTypes.object.isRequired,
  onUserLoggedOut: PropTypes.func.isRequired,
};

export default ApplicationsContainer;
