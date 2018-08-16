import React from 'react';
import PropTypes from 'prop-types';

const Items = ({onItemClick}) => {
  return (
    <React.Fragment>
      <li onClick={onItemClick} className="option-item isCursorPointer">
        <div className="option-item__legend-container">
          <span className="text text--lead">Log Out</span>
        </div>
      </li>
    </React.Fragment>
  );
};

Items.propTypes = {
  onItemClick: PropTypes.func
};

export default Items;
