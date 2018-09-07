import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../Layout/Dropdown';
import Items from './Items';
import Toggle from './Toggle';

const EditDropdown = ({onEditClick, onDeleteClick}) => {
  return (
    <Dropdown
      items={<Items onEditClick={onEditClick} onDeleteClick={onDeleteClick} />}
      toggle={<Toggle/>}
    />
  );
};

EditDropdown.propTypes = {
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default EditDropdown;
