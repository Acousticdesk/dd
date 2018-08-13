import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

const UserDropdownItems = ({onItemClick}) => {
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

UserDropdownItems.propTypes = {
  onItemClick: PropTypes.func
};

const UserDropdownToggle = ({email, onClick}) => {
  return (
    <p onClick={onClick} className="color--grey">
      {email}
      <i className="material-icons">arrow_drop_down</i>
    </p>
  );
};

UserDropdownToggle.propTypes = {
  email: PropTypes.string,
  onItemClick: PropTypes.func
};

const UserDropdown = ({email, onItemClick}) => {
  return (
    <Dropdown
      Items={<UserDropdownItems/>}
      Toggle={<UserDropdownToggle email={email}/>}
      onItemClick={onItemClick}
    />
  );
};

UserDropdown.propTypes = {
  email: PropTypes.string,
  onItemClick: PropTypes.func.isRequired
};

export default UserDropdown;
