import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Input from '../../../Form/Input';

const Int = ({ name, label, onSettingsChange }) => (
  <div
    className="placement-settings__field-container placement-settings__field-container--offset-s"
  >
    <Field
      name={name}
      label={label}
      component={Input}
      onChange={onSettingsChange}
    />
  </div>
);

Int.defaultProps = {
  name: null,
  label: null,
  onSettingsChange: null,
};

Int.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onSettingsChange: PropTypes.func,
};

export default Int;
