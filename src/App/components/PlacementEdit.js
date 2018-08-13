import React from 'react';
import PropTypes from 'prop-types';

import NoAppSelectedPrompt from './NoAppSelectedPrompt';
import PlacementSettings from './PlacementSettings';

const PlacementEdit = ({selectedPlacement, settings, selectedAppIntegration}) => {
  return (
    <React.Fragment>
      {!selectedPlacement
        ? <NoAppSelectedPrompt/>
        : <PlacementSettings settings={settings[selectedAppIntegration]} placement={selectedPlacement}/>}
    </React.Fragment>
  );
};

PlacementEdit.propTypes = {
  settings: PropTypes.object,
  selectedPlacement: PropTypes.object,
  selectedAppIntegration: PropTypes.string
};

PlacementEdit.defaultProps = {
  settings: {}
};

export default PlacementEdit;
