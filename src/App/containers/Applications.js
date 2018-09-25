import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import API from '../../API';
import config from '../../../config';
import { getIdAppEdit } from '../redux/data/Applications/appEdit';
import { getIdAppSelected } from '../redux/data/Applications/appSelect';

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
    selectedPlacement: null,
    apps: null,
    settings: null,
    placementToDelete: null,
    placementSettingsChanged: false,
    placementSaveModalShow: false,
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
      selectedPlacement: this.getPlacementById(this.props.idAppSelected, id)
    });
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

    if (this.state.isMobile && !this.state.selectedPlacement) {
      return null;
    }

    return (
      <PlacementEdit
        isMobile={this.state.isMobile}
        settings={this.state.settings}
        selectedAppPlatform={selectedAppPlatform}
        selectedAppIntegration={selectedAppIntegration}
        selectedPlacement={this.state.selectedPlacement}
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
        selectPlacement={this.selectPlacement}
        selectedPlacement={this.state.selectedPlacement}
        selectedApp={this.props.idAppSelected}
        zendesk={config.zendesk}
        onDeleteApp={this.onDeleteApp}
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

  placementSettingsClose = () => {
    this.setState({selectedPlacement: null});
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
};

const mapStateToProps = state => ({
  idAppEdit: getIdAppEdit(state),
  idAppSelected: getIdAppSelected(state),
});

const mapDispatchToProps = dispatch => ({
  submitPlacementEditForm: bindActionCreators(() => submit('placementSettings'), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsContainer);
