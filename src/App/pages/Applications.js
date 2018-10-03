import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Layout/Header';

const Applications = ({
  appsList,
  placementEdit,
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
                {appsList}
              </ul>
            </div>
            {placementEdit}
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
  appsList: PropTypes.element,
  placementEdit: PropTypes.element,
  appModal: PropTypes.element,
  sidenav: PropTypes.element,
  subheader: PropTypes.element,
  deletePlacementModal: PropTypes.element,
  placementSaveModal: PropTypes.element,
  userEmail: PropTypes.string,
  onUserLoggedOut: PropTypes.func,
};

export default Applications;
