import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NoAppSelectedPrompt from './NoAppSelectedPrompt';
import PlacementSettings from './PlacementSettings/index';
import { getIsMobileViewport } from '../../../redux/ui/mobileViewport';
import { getSettingsApps } from '../../../redux/data/Applications/settings';
import { getAppById as getAppByIdImport } from '../../../redux/data/entities/apps';
import { getIdAppSelected } from '../../../redux/ui/Applications/selected';
import { getPlacementSelected, placementSelect as placementSelectImport } from '../../../redux/ui/Applications/placementSelect';
import { placementSettingsChange as placementSettingsChangeImport } from '../../../redux/ui/Applications/placementSettings';

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
        ? <NoAppSelectedPrompt />
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

PlacementEdit.defaultProps = {
  settings: {},
  isMobileViewport: null,
  getAppById: null,
  idAppSelected: null,
  placementSelected: null,
  placementSettingsChange: null,
  placementSelect: null,
};

PlacementEdit.propTypes = {
  settings: PropTypes.shape(),
  isMobileViewport: PropTypes.bool,
  getAppById: PropTypes.func,
  idAppSelected: PropTypes.number,
  placementSelected: PropTypes.shape(),
  placementSettingsChange: PropTypes.func,
  placementSelect: PropTypes.func,
};

const mapStateToProps = state => ({
  isMobileViewport: getIsMobileViewport(state),
  settings: getSettingsApps(state),
  getAppById: getAppByIdImport(state),
  idAppSelected: getIdAppSelected(state),
  placementSelected: getPlacementSelected(state),
});

const mapDispatchToProps = dispatch => ({
  placementSettingsChange: bindActionCreators(placementSettingsChangeImport, dispatch),
  placementSelect: bindActionCreators(placementSelectImport, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacementEdit);
