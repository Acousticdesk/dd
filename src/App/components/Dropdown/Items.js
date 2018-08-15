import PropTypes from 'prop-types';
import React from 'react';

const Items = ({items, options, onItemClick}) => {
  return (
    items
      ? React.cloneElement(items, {
        onItemClick
      })
      : options && options.map((i, index) => (
      <li data-value={i} key={index} onClick={onItemClick} className="option-item isCursorPointer">
        <div className="option-item__legend-container">
          <span className="text text--lead">{i}</span>
        </div>
      </li>
    ))
  );
};

Items.propTypes = {
  items: PropTypes.element,
  options: PropTypes.array,
  onItemClick: PropTypes.func
};

export default Items;
