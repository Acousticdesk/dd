import React from 'react';
import PropTypes from 'prop-types';

const Items = ({onLogOut}) => {
  return (
    <React.Fragment>
      <li onClick={onLogOut} className="option-item isCursorPointer">
        <div className="option-item__legend-container">
          <span className="text text--lead">Log Out</span>
        </div>
      </li>
    </React.Fragment>
  );
};

Items.propTypes = {
  onLogOut: PropTypes.func
};

export default Items;
