import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Checkbox from '../../../Form/Checkbox';

const Boolean = ({ name, label, onSettingsChange }) => (
  <div
    className="placement-settings__field-container placement-settings__field-container--offset-s"
  >
    <Field
      name={name}
      label={label}
      component={Checkbox}
      onChange={onSettingsChange}
    />
  </div>
);

Boolean.defaultProps = {
  name: null,
  label: null,
  onSettingsChange: null,
};

Boolean.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onSettingsChange: PropTypes.func,
};

export default Boolean;
