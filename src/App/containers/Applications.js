import PropTypes from 'prop-types';
import React, { Component } from 'react';

import API from '../../API';
import Applications from '../pages/Applications';
import PlacementEdit from '../components/ApplicationsPage/PlacementEdit';
import Sidenav from '../components/Layout/Sidenav';
import Header from '../components/Layout/Header';
import SubHeader from '../components/Layout/SubHeader';
import NewApp from '../components/ApplicationsPage/NewApp/index';
import ApplicationsList from '../components/ApplicationsPage/ApplicationsList';
import config from '../../../config';

class ApplicationsContainer extends Component {
  state = {
    selectedApp: null,
    selectedPlacement: null,
    isCreatingNewApp: false,
    apps: null,
    settings: null,
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

  deletePlacement = (id) => {

  };

  onPlacementEdit = (field) => {
    this.setState({
      selectedPlacement: {
        ...this.state.selectedPlacement,
        [field.name]: field.value
      }
    });
  };

  render() {
    return (
      <Applications
        sidenav={
          <Sidenav/>
        }
        header={
          <Header userEmail={this.props.user.email} onUserLoggedOut={this.props.onUserLoggedOut}/>
        }
        subheader={
          <SubHeader onCreateAppClick={this.showApplicationModal}/>
        }
        placementEdit={
          <PlacementEdit
            settings={this.state.settings}
            onPlacementEdit={this.onPlacementEdit}
            selectedAppIntegration={this.getAppById(this.state.selectedApp) && this.getAppById(this.state.selectedApp).integration}
            selectedPlacement={this.state.selectedPlacement}/>
        }
        appsList={
          <ApplicationsList
            apps={this.state.apps}
            deletePlacement={this.deletePlacement}
            selectPlacement={this.selectPlacement}
            selectedPlacement={this.state.selectedPlacement}
            selectedApp={this.state.selectedApp}
            select={this.selectApp}
            zendesk={config.zendesk}/>
        }
        showApplicationModal={this.showApplicationModal}
        createAppModal={this.state.isCreatingNewApp ? <NewApp close={this.hideApplicationModal}/> : null}
      />
    );
  }
}

ApplicationsContainer.propTypes = {
  user: PropTypes.object.isRequired,
  onUserLoggedOut: PropTypes.func.isRequired,
};

export default ApplicationsContainer;
