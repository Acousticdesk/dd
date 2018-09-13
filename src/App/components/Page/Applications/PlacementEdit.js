import React from 'react';
import PropTypes from 'prop-types';

import NoAppSelectedPrompt from './NoAppSelectedPrompt';
import PlacementSettings from './PlacementSettings';

const PlacementEdit = ({selectedPlacement, settings, selectedAppPlatform, onSettingsChange, close, selectedAppIntegration}) => {
  return (
    <div className="l-applications-main__side-bar">
      {!selectedPlacement
        ? <NoAppSelectedPrompt/>
        : (
          <PlacementSettings
            settings={settings[selectedAppPlatform][selectedAppIntegration]}
            placement={selectedPlacement}
            onSettingsChange={onSettingsChange}
            close={close}
          />
        )}
    </div>
  );
};

PlacementEdit.propTypes = {
  settings: PropTypes.object,
  selectedPlacement: PropTypes.object,
  selectedAppPlatform: PropTypes.string,
  onSettingsChange: PropTypes.func,
  close: PropTypes.func,
  selectedAppIntegration: PropTypes.string,
};

PlacementEdit.defaultProps = {
  settings: {}
};

export default PlacementEdit;
