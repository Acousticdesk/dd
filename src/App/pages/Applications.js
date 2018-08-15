import React from 'react';
import PropTypes from 'prop-types';

const Applications = ({
    appsList,
    placementEdit,
    createAppModal,
    sidenav,
    header,
    subheader,
  }) => {
  return (
    <React.Fragment>
      <div className="l-applications">
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
      {createAppModal}
    </React.Fragment>
  );
};

Applications.propTypes = {
  appsList: PropTypes.arrayOf(PropTypes.element),
  placementEdit: PropTypes.element,
  createAppModal: PropTypes.element,
  sidenav: PropTypes.element,
  header: PropTypes.element,
  subheader: PropTypes.element
};

export default Applications;
