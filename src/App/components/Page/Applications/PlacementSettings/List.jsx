import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Select from '../../../Form/Select';

const List = ({
  name,
  label,
  options,
  onSettingsChange,
}) => (
  <div
    className="placement-settings__field-container placement-settings__field-container--offset-s"
  >
    <Field
      name={name}
      label={label}
      options={options}
      component={Select}
      onOptionSelected={onSettingsChange}
    />
  </div>
);

List.defaultProps = {
  name: null,
  label: null,
  options: null,
  onSettingsChange: null,
};

List.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(),
  onSettingsChange: PropTypes.func,
};

export default List;
