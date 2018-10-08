import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../Layout/Dropdown/index';
import Items from './Items';
import Toggle from './Toggle';

const EditDropdown = ({ onEditClick, onDeleteClick }) => (
  <Dropdown
    items={<Items onEditClick={onEditClick} onDeleteClick={onDeleteClick} />}
    toggle={<Toggle />}
  />
);

EditDropdown.defaultProps = {
  onEditClick: null,
  onDeleteClick: null,
};

EditDropdown.propTypes = {
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default EditDropdown;
