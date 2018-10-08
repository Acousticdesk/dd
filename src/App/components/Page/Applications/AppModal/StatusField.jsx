import React from 'react';
import { Field } from 'redux-form';

import Select from '../../../Form/Select';

const StatusField = () => (
  <div className="application-info__field-container">
    <Field
      name="status"
      options={[
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ]}
      label="Status"
      component={Select}
    />
  </div>
);

export default StatusField;
