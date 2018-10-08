import React from 'react';
import PropTypes from 'prop-types';

const Items = ({ onLogOut }) => (
  <React.Fragment>
    <li role="menuitem" onKeyDown={onLogOut} onClick={onLogOut} className="option-item isCursorPointer">
      <div className="option-item__legend-container">
        <span className="text text--lead">Log Out</span>
      </div>
    </li>
  </React.Fragment>
);

Items.defaultProps = {
  onLogOut: null,
};

Items.propTypes = {
  onLogOut: PropTypes.func,
};

export default Items;
