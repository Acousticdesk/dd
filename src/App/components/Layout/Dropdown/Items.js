import PropTypes from 'prop-types';
import React from 'react';

const Items = ({items, onItemClick}) => {
  return (
    items
      ? React.cloneElement(items, {
        onItemClick
      })
      : null
  );
};

Items.propTypes = {
  items: PropTypes.element,
  options: PropTypes.array,
  onItemClick: PropTypes.func
};

export default Items;
