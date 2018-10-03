import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Layout/Header';
import PlacementEdit from '../components/Page/Applications/PlacementEdit';
import ApplicationsList from '../components/Page/Applications/ApplicationsList';

const Applications = ({
  appModal,
  sidenav,
  subheader,
  deletePlacementModal,
  placementSaveModal,
  userEmail,
  onUserLoggedOut,
}) => {
  return (
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
      {appModal}
    </React.Fragment>
  );
};

Applications.propTypes = {
  appModal: PropTypes.element,
  sidenav: PropTypes.element,
  subheader: PropTypes.element,
  deletePlacementModal: PropTypes.element,
  placementSaveModal: PropTypes.element,
  userEmail: PropTypes.string,
  onUserLoggedOut: PropTypes.func,
};

export default Applications;
