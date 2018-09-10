import React from 'react';
import PropTypes from 'prop-types';

import appIcon from '../../../../../../../static/assets/applications-page/app-placeholder.png';

const AppTitle = () => {
  return (
    <p className="app-info-dashboard__text-container app-info-dashboard__title-container">
      <span className="app-info-dashboard__legend-container">
        <i
          className="material-icons icon icon-regular icon--small">
          android
        </i>
      </span>
      <span className="color--dark text-lead">Tom Loves Angela (5640)</span>
    </p>
  );
};

const AppGeo = () => {
  return (
    <p className="app-info-dashboard__text-container color--grey-lighter">
      <span className="app-info-dashboard__legend-container">
        <i className="app-info-dashboard__geo-icon icon icon-regular material-icons text-lead">public</i>
      </span>
      <span className="text--small">United States</span>
    </p>
  );
};

const AppInfo = () => {
    return (
      <div className="app-info-dashboard">
        <div className="app-info-dashboard__icon-container text-center">
          <img src={appIcon} width="40" alt=""/>
        </div>
        <div className="app-info-dashboard__integration-container">
          <AppTitle />
          <AppGeo />
        </div>
      </div>
    );
};

AppInfo.propTypes = {

};

export default AppInfo;
