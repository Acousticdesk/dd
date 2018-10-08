import PropTypes from 'prop-types';

const RenderPlacements = ({ isSelected, placements }) => (
  isSelected
    ? placements
    : null
);

RenderPlacements.defaultProps = {
  isSelected: null,
  placements: null,
};

RenderPlacements.propTypes = {
  isSelected: PropTypes.bool,
  placements: PropTypes.element,
};

export default RenderPlacements;
