import React from 'react';
import PropTypes from 'prop-types';

const Applications = ({
    appsList,
    placementEdit,
    createAppModal,
    sidenav,
    header,
    subheader,
    deletePlacementModal
  }) => {
  return (
    <React.Fragment>
      <div className="l-page l-page--with-sidebar l-page-bg-whisper">
        <div>
          {sidenav}
        </div>

        <div>
          {header}
          {subheader}
          <div className="l-applications-main">
            <div className="l-applications-main__apps-container">
              <ul className="l-applications-list">
                {appsList}
              </ul>
            </div>
            <div className="l-applications-main__side-bar">
              {placementEdit}
            </div>
          </div>
        </div>
      </div>
      {deletePlacementModal}
      {createAppModal}
    </React.Fragment>
  );
};

Applications.propTypes = {
  appsList: PropTypes.element,
  placementEdit: PropTypes.element,
  appModal: PropTypes.element,
  sidenav: PropTypes.element,
  header: PropTypes.element,
  subheader: PropTypes.element,
  deletePlacementModal: PropTypes.element,
};

export default Applications;
