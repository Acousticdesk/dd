import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Layout/Header';
import PlacementEdit from '../components/Page/Applications/PlacementEdit';
import ApplicationsList from '../components/Page/Applications/ApplicationsList';
import AppModal from '../components/Page/Applications/AppModal/index';

const Applications = ({
  sidenav,
  subheader,
  deletePlacementModal,
  placementSaveModal,
  userEmail,
  onUserLoggedOut,
}) => (
  <React.Fragment>
    <div className="l-page l-page--with-sidebar l-page-bg-whisper">
      <div>
        {sidenav}
      </div>

      <div>
        <Header
          userEmail={userEmail}
          onUserLoggedOut={onUserLoggedOut}
          pageTitle="Applications"
        />
        {subheader}
        <div className="l-applications-main">
          <div className="l-applications-main__apps-container">
            <ul className="l-applications-list">
              <ApplicationsList />
            </ul>
          </div>
          <PlacementEdit />
        </div>
      </div>
    </div>
    {placementSaveModal}
    {deletePlacementModal}
    <AppModal />
  </React.Fragment>
);

Applications.defaultProps = {
  sidenav: null,
  subheader: null,
  deletePlacementModal: null,
  placementSaveModal: null,
  userEmail: null,
  onUserLoggedOut: null,
};

Applications.propTypes = {
  sidenav: PropTypes.element,
  subheader: PropTypes.element,
  deletePlacementModal: PropTypes.element,
  placementSaveModal: PropTypes.element,
  userEmail: PropTypes.string,
  onUserLoggedOut: PropTypes.func,
};

export default Applications;
