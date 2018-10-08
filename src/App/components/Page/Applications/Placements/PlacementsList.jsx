import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PlacementPresentation from './PlacementPresentation';
import { placementToDeleteUpdate as placementToDeleteUpdateImport } from '../../../../redux/ui/Applications/placementToDelete';

const PlacementsList = ({
  placements,
  selectedPlacement,
  appPlatform,
  placementToDeleteUpdate,
  placementSelect,
  zendesk,
}) => {
  const deletePlacement = id => (evt) => {
    evt.persist();
    evt.stopPropagation();

    placementToDeleteUpdate(id);
  };

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

PlacementsList.defaultProps = {
  placements: null,
  selectedPlacement: null,
  placementSelect: null,
  appPlatform: null,
  zendesk: null,
  placementToDeleteUpdate: null,
};

PlacementsList.propTypes = {
  placements: PropTypes.shape(),
  selectedPlacement: PropTypes.shape(),
  placementSelect: PropTypes.func,
  appPlatform: PropTypes.string,
  zendesk: PropTypes.shape(),
  placementToDeleteUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  placementToDeleteUpdate: bindActionCreators(placementToDeleteUpdateImport, dispatch),
});

export default connect(null, mapDispatchToProps)(PlacementsList);
