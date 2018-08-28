import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Select from '../../../Form/Select';

const StatusField = ({}) => {
  return (
    <div className="application-info__field-container">
      <Field
        name="status"
        options={[
          {label: 'Active', value: 'active'},
          {label: 'Inactive', value: 'inactive'}
        ]}
        label="Status"
        component={Select}
      />
    </div>
  );
};

StatusField.propTypes = {
  isActiveStatus: PropTypes.bool,
};

export default StatusField;
