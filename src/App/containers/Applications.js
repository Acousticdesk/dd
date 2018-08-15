import PropTypes from 'prop-types';
import React, { Component } from 'react';

import config from '../../../config';
import API from '../../API';
import Applications from '../pages/Applications';
import PlacementEdit from '../components/PlacementEdit';
import Application from '../components/Application';
import Sidenav from '../components/Sidenav';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import NewApp from '../components/NewApp';

import open from '../../../static/assets/icons/open.svg';
import dashboard from '../../../static/assets/icons/dashboard.svg';
import apps from '../../../static/assets/icons/apps.svg';
import reports from '../../../static/assets/icons/reports.svg';
import downloads from '../../../static/assets/icons/downloads.svg';
import documentation from '../../../static/assets/icons/documentation.svg';

const iconsArray = [
  {open},
  {dashboard},
  {apps},
  {reports},
  {downloads},
  {documentation}
];

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

  getAppsList() {
    if (!this.state.apps) {
      return null;
    }

    return Object.entries(this.state.apps).map((a) => {
      const id = window.parseInt(a[0]);
      const props = a[1];
      return (
        <Application
          deletePlacement={this.deletePlacement}
          selectPlacement={this.selectPlacement}
          selectedPlacement={this.state.selectedPlacement}
          app={props}
          key={id}
          isSelected={this.state.selectedApp === id}
          select={this.selectApp}
          zendesk={config.zendesk}
        />
      );
    })
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

  getSideNavLinks() {
    return iconsArray.map((icon, index) => {
      const iconName = Object.keys(icon)[0];
      const IconComponent = icon[iconName];
      const activeClass = iconName === 'apps' ? 'active' : '';
      return (
        <li key={index} className={`item item--${iconName} ${activeClass}`}>
          <a
            href="javascript:void(0);"
          >
            <IconComponent/>
          </a>
        </li>
      );
    })
  }

  render() {
    return (
      <Applications
        sidenav={
          <Sidenav sideNavLinks={this.getSideNavLinks()}/>
        }
        header={
          <Header userEmail={this.props.user.email} onUserLoggedOut={this.props.onUserLoggedOut}/>
        }
        subheader={
          <SubHeader onCreateAppClick={this.showApplicationModal}/>
        }
        appsList={this.getAppsList()}
        showApplicationModal={this.showApplicationModal}
        placementEdit={
          <PlacementEdit
            settings={this.state.settings}
            onPlacementEdit={this.onPlacementEdit}
            selectedAppIntegration={this.getAppById(this.state.selectedApp) && this.getAppById(this.state.selectedApp).integration}
            selectedPlacement={this.state.selectedPlacement}/>
        }
        createAppModal={this.state.isCreatingNewApp ? <NewApp close={this.hideApplicationModal}/> : null}
      />
    );
  }
}

ApplicationsContainer.propTypes = {
  user: PropTypes.object.isRequired,
  onUserLoggedOut: PropTypes.func.isRequired
};

export default ApplicationsContainer;
