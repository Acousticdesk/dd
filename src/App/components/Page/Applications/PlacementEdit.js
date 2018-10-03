import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NoAppSelectedPrompt from './NoAppSelectedPrompt';
import PlacementSettings from './PlacementSettings';
import { getIsMobileViewport } from '../../../redux/ui/mobileViewport';
import { getSettingsApps } from '../../../redux/data/Applications/settings';
import { getAppById } from '../../../redux/data/entities/apps';
import { getIdAppSelected } from '../../../redux/ui/Applications/selected';
import { getPlacementSelected, placementSelect } from '../../../redux/ui/Applications/placementSelect';
import { placementSettingsChange } from '../../../redux/ui/Applications/placementSettings';

const PlacementEdit = ({
  placementSelected,
  settings,
  isMobileViewport,
  getAppById,
  idAppSelected,
  placementSettingsChange,
  placementSelect,
}) => {
  if (isMobileViewport && !placementSelected) {
    return null;
  }

  const appSelected = getAppById(idAppSelected);
  const platformAppSelected = appSelected && appSelected.platform;
  const integrationAppSelected = appSelected && appSelected.integration;

  return (
    <div className="l-applications-main__side-bar">
      {!placementSelected
        ? <NoAppSelectedPrompt/>
        : (
          <PlacementSettings
            settings={settings[platformAppSelected][integrationAppSelected]}
            placement={placementSelected}
            onSettingsChange={placementSettingsChange}
            close={() => placementSelect(null)}
          />
        )}
    </div>
  );
};

PlacementEdit.propTypes = {
  settings: PropTypes.object,
  selectedAppIntegration: PropTypes.string,
  isMobileViewport: PropTypes.bool,
  getAppById: PropTypes.func,
  idAppSelected: PropTypes.number,
  placementSelected: PropTypes.object,
  placementSettingsChange: PropTypes.func,
  placementSelect: PropTypes.func,
};

PlacementEdit.defaultProps = {
  settings: {}
};

const mapStateToProps = state => ({
  isMobileViewport: getIsMobileViewport(state),
  settings: getSettingsApps(state),
  getAppById: getAppById(state),
  idAppSelected: getIdAppSelected(state),
  placementSelected: getPlacementSelected(state),
});

const mapDispatchToProps = dispatch => ({
  placementSettingsChange: bindActionCreators(placementSettingsChange, dispatch),
  placementSelect: bindActionCreators(placementSelect, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacementEdit);
