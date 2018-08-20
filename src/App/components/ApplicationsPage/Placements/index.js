import React from 'react';
import PropTypes from 'prop-types';

import PlacementsList from './PlacementsList';

const Placements = ({placements, selectPlacement, selectedPlacement, zendesk, appIntegration, deletePlacement, settings}) => {
  return (
    <div className="placements">
      <div className="placements__header">
        <div className="placements__legend-container text-bold color--dark">Placements</div>
        <div className="placements__cta-container">
          <button className="btn btn--bigger btn-regular color--chetwod-blue">
            <span className="btn__icon-container btn__icon-container--center">
              <i className="icon icon-chetwod-blue icon--small material-icons">add</i>
            </span>
            New Placement
          </button>
        </div>
      </div>
      <div className="placements__content ">
        <PlacementsList
          placements={placements}
          selectPlacement={selectPlacement}
          selectedPlacement={selectedPlacement}
          zendesk={zendesk}
          appIntegration={appIntegration}
          deletePlacement={deletePlacement}
          settings={settings}
        />
      </div>
    </div>
  );
};

Placements.propTypes = {
  placements: PropTypes.object.isRequired,
  selectPlacement: PropTypes.func.isRequired,
  selectedPlacement: PropTypes.object,
  zendesk: PropTypes.object.isRequired,
  appIntegration: PropTypes.string.isRequired,
  deletePlacement: PropTypes.func.isRequired,
  settings: PropTypes.object
};

export default Placements;