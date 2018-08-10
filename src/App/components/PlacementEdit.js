import React from 'react';
import PropTypes from 'prop-types';

import NoAppSelectedPrompt from './NoAppSelectedPrompt';
import PlacementSettings from './PlacementSettings';

const PlacementEdit = ({selectedPlacement}) => {
  return (
    <React.Fragment>
      {!selectedPlacement ? <NoAppSelectedPrompt/> : <PlacementSettings placement={selectedPlacement}/>}
    </React.Fragment>
  );
};

PlacementEdit.propTypes = {
  selectedPlacement: PropTypes.object
};

export default PlacementEdit;
