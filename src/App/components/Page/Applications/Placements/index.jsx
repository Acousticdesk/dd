import React from 'react';
import PropTypes from 'prop-types';

import PlacementsList from './PlacementsList';

const Placements = ({
  placements,
  placementSelect,
  selectedPlacement,
  zendesk,
  appPlatform,
  settings,
}) => (
  <div className="placements">
    <div className="placements__header">
      <div className="placements__legend-container text-bold color--dark">Placements</div>
      <div className="placements__cta-container">
        <button type="button" className="btn btn--bigger btn-regular color--chetwod-blue">
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

Placements.defaultProps = {
  placements: null,
  placementSelect: null,
  selectedPlacement: null,
  zendesk: null,
  appPlatform: null,
  settings: null,
};

Placements.propTypes = {
  placements: PropTypes.shape(),
  placementSelect: PropTypes.func,
  selectedPlacement: PropTypes.shape(),
  zendesk: PropTypes.shape(),
  appPlatform: PropTypes.string,
  settings: PropTypes.shape(),
};

export default Placements;
