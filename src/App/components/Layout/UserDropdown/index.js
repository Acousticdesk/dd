import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown';
import Toggle from './Toggle';
import Items from './Items';

const UserDropdown = ({email, onLogOut}) => {
  return (
    <Dropdown
      items={<Items onLogOut={onLogOut} />}
      toggle={<Toggle email={email} />}
    />
  );
};

UserDropdown.propTypes = {
  email: PropTypes.string,
  onLogOut: PropTypes.func
};

export default UserDropdown;
