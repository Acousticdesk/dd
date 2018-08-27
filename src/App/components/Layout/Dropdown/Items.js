import PropTypes from 'prop-types';
import React from 'react';

const Items = ({items, options, onItemClick}) => {
  return (
    items
      ? React.cloneElement(items, {
        onItemClick
      })
      : options && options.map((i, index) => (
      <li key={index} onClick={onItemClick(i)} className="option-item isCursorPointer">
        <div className="option-item__legend-container">
          <span className="text text--lead">{i.label}</span>
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
