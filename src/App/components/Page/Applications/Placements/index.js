import React from 'react';
import PropTypes from 'prop-types';

import PlacementsList from './PlacementsList';

const Placements = ({placements, placementSelect, selectedPlacement, zendesk, appPlatform, settings}) => {
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
          placementSelect={placementSelect}
          selectedPlacement={selectedPlacement}
          zendesk={zendesk}
          appPlatform={appPlatform}
          settings={settings}
        />
      </div>
    </div>
  );
};

Placements.propTypes = {
  placements: PropTypes.object,
  placementSelect: PropTypes.func.isRequired,
  selectedPlacement: PropTypes.object,
  zendesk: PropTypes.object.isRequired,
  appPlatform: PropTypes.string.isRequired,
  settings: PropTypes.object
};

export default Placements;
