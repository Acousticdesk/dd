import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
        deletePlacementModal={this.getDeletePlacementModal()}
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
  editApp: bindActionCreators(editApp, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsContainer);
