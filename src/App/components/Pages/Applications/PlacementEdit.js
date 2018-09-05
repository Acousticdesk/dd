import React from 'react';
import PropTypes from 'prop-types';

import NoAppSelectedPrompt from './NoAppSelectedPrompt';
import PlacementSettings from './PlacementSettings';

const PlacementEdit = ({selectedPlacement, settings, selectedAppIntegration, onSettingsChange}) => {
  return (
    <div className="l-applications-main__side-bar">
      {!selectedPlacement
        ? <NoAppSelectedPrompt/>
        : (
          <PlacementSettings
            settings={settings[selectedAppIntegration]}
            placement={selectedPlacement}
            onSettingsChange={onSettingsChange}
          />
        )}
    </div>
  );
};

PlacementEdit.propTypes = {
  settings: PropTypes.object,
  selectedPlacement: PropTypes.object,
  selectedAppIntegration: PropTypes.string,
  onSettingsChange: PropTypes.func,
};

PlacementEdit.defaultProps = {
  settings: {}
};

export default PlacementEdit;
