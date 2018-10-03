import React from 'react';
import PropTypes from 'prop-types';

const Items = ({onEditClick}) => {
  return (
    <React.Fragment>
      <li onClick={onEditClick} className="option-item isCursorPointer">
        <div className="option-item__icon-container">
          <i className="icon icon-regular icon--small material-icons">edit</i>
        </div>
        <div className="option-item__legend-container">
          <span className="text text--lead">Edit</span>
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
};

Items.propTypes = {
  onEditClick: PropTypes.func,
};

export default Items;
