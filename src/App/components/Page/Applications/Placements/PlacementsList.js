import React from 'react';
import PropTypes from 'prop-types';

import PlacementPresentation from './PlacementPresentation';

const PlacementsList = ({placements, selectedPlacement, appPlatform, deletePlacement, placementSelect, zendesk}) => {
  return (
    Object.entries(placements).map(([id, placement]) => {
      const selectedClassName = selectedPlacement === placement ? 'selected' : '';
      const zendeskUrl = zendesk[appPlatform][placement.adUnitType];

      return (
        <PlacementPresentation
          key={id}
          placement={placement}
          selectedClassName={selectedClassName}
          zendeskUrl={zendeskUrl}
          deletePlacement={deletePlacement}
          placementSelect={placementSelect(placement)}
        />
      );
    })
  );
};

PlacementsList.propTypes = {
  placements: PropTypes.object,
  selectedPlacement: PropTypes.object,
  placementSelect: PropTypes.func,
  appPlatform: PropTypes.string,
  deletePlacement: PropTypes.func,
  zendesk: PropTypes.object,
};

export default PlacementsList;
