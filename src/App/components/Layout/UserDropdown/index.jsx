import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown/index';
import Toggle from './Toggle';
import Items from './Items';

const UserDropdown = ({ email, onLogOut }) => (
  <Dropdown
    items={<Items onLogOut={onLogOut} />}
    toggle={<Toggle email={email} />}
    noCaret
  />
);

UserDropdown.defaultProps = {
  email: null,
  onLogOut: null,
};

UserDropdown.propTypes = {
  email: PropTypes.string,
  onLogOut: PropTypes.func,
};

export default UserDropdown;
