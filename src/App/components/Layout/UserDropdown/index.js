import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown/index';
import Toggle from './Toggle';
import Items from './Items';

const UserDropdown = ({email, onItemClick}) => {
  return (
    <Dropdown
      items={<Items/>}
      toggle={<Toggle email={email}/>}
      onItemClick={onItemClick}
    />
  );
};

UserDropdown.propTypes = {
  email: PropTypes.string,
  onItemClick: PropTypes.func.isRequired
};

export default UserDropdown;
