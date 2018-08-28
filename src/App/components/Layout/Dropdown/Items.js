import PropTypes from 'prop-types';
import React from 'react';

const Items = ({items}) => {
  return (
    items
      ? items
      : null
  );
};

Items.propTypes = {
  items: PropTypes.element,
};

export default Items;
