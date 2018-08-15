import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

const EditDropdownItems = ({onItemClick}) => {
  return (
    <React.Fragment>
      <li onClick={onItemClick} className="option-item isCursorPointer">
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

EditDropdownItems.propTypes = {
  onItemClick: PropTypes.func
};

const EditDropdownToggle = ({onClick}) => {
  return (
    <a onClick={onClick} href="javascript:void(0);" className="options-btn">
      <i className="icon icon-regular material-icons isCursorPointer">more_vert</i>
    </a>
  );
};

EditDropdownToggle.propTypes = {
  onClick: PropTypes.func
};

const EditDropdown = ({onItemClick}) => {
  return (
    <Dropdown
      items={<EditDropdownItems/>}
      toggle={<EditDropdownToggle/>}
      onItemClick={onItemClick}
    />
  );
};

EditDropdown.propTypes = {
  onItemClick: PropTypes.func.isRequired
};

export default EditDropdown;
