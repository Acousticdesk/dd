import PropTypes from 'prop-types';

const Items = ({ items }) => items || null;

Items.propTypes = {
  items: PropTypes.element,
};

export default Items;
