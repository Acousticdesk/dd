import React, { Component } from 'react';
import PropTypes from 'prop-types';

import open from '../../../static/assets/icons/open.svg';
import dashboard from '../../../static/assets/icons/dashboard.svg';
import apps from '../../../static/assets/icons/apps.svg';
import reports from '../../../static/assets/icons/reports.svg';
import downloads from '../../../static/assets/icons/downloads.svg';
import documentation from '../../../static/assets/icons/documentation.svg';
import logo from '../../../static/assets/logo/@1x.png';

import config from '../../../config';
import PlacementEdit from '../components/PlacementEdit';
import NewApp from '../components/NewApp';
import API from '../../API';
import Application from '../components/Application';
import UserDropdown from '../components/UserDropdown';

const iconsArray = [
  {open},
  {dashboard},
  {apps},
  {reports},
  {downloads},
  {documentation}
];

class Applications extends Component {
  state = {
    selectedApp: null,
    selectedPlacement: null,
    isCreatingNewApp: false,
    apps: null,
    settings: null
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

  renderApps() {
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
      selectedPlacement: id
    });
  };

  deletePlacement = (id) => {

  };

  render() {
    return (
      <React.Fragment>
        <div className="l-applications">
          <div>
            <nav className="sidenav">
              <ul>
                {
                  iconsArray.map((icon, index) => {
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
              </ul>
            </nav>
          </div>

          <div>
            <header className="l-header">
              <div className="l-header__logo-container text-center">
                <img src={logo} width="22px" alt="Display.io"/>
              </div>
              <div className="l-header__title-container">
                <h4 className="heading heading--med heading--no-offset">Applications</h4>
              </div>
              <div className="l-header__notifications-container text-center">
                <i className="icon icon-regular icon--notification material-icons isCursorPointer">notifications</i>
              </div>
              <div className="l-header__user-container text-center isCursorPointer">
                <UserDropdown email={this.props.user.email} onItemClick={this.props.onUserLoggedOut}/>
              </div>
            </header>
            <div className="l-sub-header">
              <div className="l-sub-header__search-container">
                <div className="search-bar isRoundedBorders">
                  <input className="color--grey-light" type="text" placeholder="Search apps by name, type..."/>
                </div>
              </div>
              <div className="l-sub-header__sort-container isCursorPointer">
                <p className="color--grey">
                  Sort By: Name
                  <i className="material-icons">arrow_drop_down</i>
                </p>
              </div>
              <div className="l-sub-header__cta-container">
                <button onClick={this.showApplicationModal} className="btn btn-regular btn-border-chetwod-blue color--chetwod-blue">New Application</button>
              </div>
            </div>
            <div className="l-applications-main">
              <div className="l-applications-main__apps-container">
                <ul className="l-applications-list">
                  {this.state.apps ? this.renderApps() : null}
                </ul>
              </div>
              <div className="l-applications-main__side-bar">
                <PlacementEdit
                  settings={this.state.settings}
                  selectedAppIntegration={this.getAppById(this.state.selectedApp) && this.getAppById(this.state.selectedApp).integration}
                  selectedPlacement={this.getPlacementById(this.state.selectedApp, this.state.selectedPlacement)}/>
              </div>
            </div>
          </div>
        </div>
        {this.state.isCreatingNewApp && <NewApp close={this.hideApplicationModal}/>}
      </React.Fragment>
    );
  }
}

Applications.propTypes = {
  user: PropTypes.object.isRequired,
  onUserLoggedOut: PropTypes.func.isRequired
};

export default Applications;
