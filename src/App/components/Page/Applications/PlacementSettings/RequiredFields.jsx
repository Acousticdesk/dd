import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Select from '../../../Form/Select';
import required from '../../../../validations';
import Input from '../../../Form/Input';

const RequiredFields = ({ onSettingsChange, adUnitTypeOptions }) => (
  <Fragment>
    <div className="placement-settings__field-container">
      <Field
        name="name"
        label="Name"
        validate={[required]}
        component={Input}
        onChange={onSettingsChange}
      />
    </div>

    <div className="placement-settings__field-container">
      <Field
        name="adUnitType"
        label="Ad Unit"
        options={adUnitTypeOptions}
        component={Select}
        onOptionSelected={onSettingsChange}
      />
    </div>

    <div className="placement-settings__field-container">
      <Field
        name="status"
        label="Status"
        options={[
          { value: 'active', label: 'Active' },
          { value: 'inactive', label: 'Inactive' },
        ]}
        component={Select}
        onOptionSelected={onSettingsChange}
      />
    </div>
  </Fragment>
);

RequiredFields.defaultProps = {
  onSettingsChange: null,
  adUnitTypeOptions: null,
};

RequiredFields.propTypes = {
  onSettingsChange: PropTypes.func,
  adUnitTypeOptions: PropTypes.arrayOf(),
};

export default RequiredFields;
