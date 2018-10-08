import React from 'react';
import PropTypes from 'prop-types';

const Items = ({ onEditClick }) => (
  <React.Fragment>
    <li>
      <div
        role="button"
        tabIndex="0"
        onKeyDown={onEditClick}
        onClick={onEditClick}
        className="option-item isCursorPointer"
      >
        <div className="option-item__icon-container">
          <i className="icon icon-regular icon--small material-icons">edit</i>
        </div>
        <div className="option-item__legend-container">
          <span className="text text--lead">Edit</span>
        </div>
      </div>
    </li>
    <li className="dropdown__item">
      <div className="option-item isCursorPointer">
        <div className="option-item__icon-container">
          <i className="icon icon-regular icon--small material-icons">delete</i>
        </div>
        <div className="option-item__legend-container">
          <span className="text text--lead">Delete</span>
        </div>
      </div>
    </li>
  </React.Fragment>
);

Items.defaultProps = {
  onEditClick: null,
};

Items.propTypes = {
  onEditClick: PropTypes.func,
};

export default Items;
