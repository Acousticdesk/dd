import React from 'react';
import PropTypes from 'prop-types';

const RenderPlacements = ({isSelected, placements}) => {
  return (
    isSelected
      ? placements
      : null
  );
};

RenderPlacements.propTypes = {
  isSelected: PropTypes.bool,
  placements: PropTypes.element
};

export default RenderPlacements;
