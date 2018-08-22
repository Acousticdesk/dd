import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../Layout/Dropdown';
import Items from './Items';
import Toggle from './Toggle';

const EditDropdown = ({onItemClick}) => {
  return (
    <Dropdown
      items={<Items/>}
      toggle={<Toggle/>}
      onItemClick={onItemClick}
    />
  );
};

EditDropdown.propTypes = {
  onItemClick: PropTypes.func.isRequired
};

export default EditDropdown;
