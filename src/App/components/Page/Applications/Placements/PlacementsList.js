import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PlacementPresentation from './PlacementPresentation';
import {placementToDeleteUpdate} from '../../../../redux/ui/Applications/placementToDelete';

const PlacementsList = ({placements, selectedPlacement, appPlatform, placementToDeleteUpdate, placementSelect, zendesk}) => {
  const deletePlacement = (id) => (evt) => {
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

PlacementsList.propTypes = {
  placements: PropTypes.object,
  selectedPlacement: PropTypes.object,
  placementSelect: PropTypes.func,
  appPlatform: PropTypes.string,
  zendesk: PropTypes.object,
  placementToDeleteUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  placementToDeleteUpdate: bindActionCreators(placementToDeleteUpdate, dispatch),
});

export default connect(null, mapDispatchToProps)(PlacementsList);
