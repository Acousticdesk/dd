import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Layout/Header';
import PlacementEdit from '../components/Page/Applications/PlacementEdit';
import ApplicationsList from '../components/Page/Applications/ApplicationsList';
import AppModal from '../components/Page/Applications/AppModal';
import PlacementDeleteModal from '../components/Page/Applications/PlacementDeleteModal';
import PlacementSaveModal from '../components/Page/Applications/PlacementSaveModal';
import Sidenav from '../components/Layout/Sidenav';


const Applications = ({
  subheader,
  userEmail,
  onUserLoggedOut,
}) => (
  <React.Fragment>
    <div className="l-page l-page--with-sidebar l-page-bg-whisper">
      <div>
        <Sidenav />
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
    <PlacementSaveModal />
    <PlacementDeleteModal />
    <AppModal />
  </React.Fragment>
);

Applications.defaultProps = {
  subheader: null,
  userEmail: null,
  onUserLoggedOut: null,
};

Applications.propTypes = {
  subheader: PropTypes.element,
  userEmail: PropTypes.string,
  onUserLoggedOut: PropTypes.func,
};

export default Applications;
