import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Checkbox from '../../../Form/Checkbox';

const StatusField = ({isActiveStatus}) => {
  return (
    <div className="application-info__field-container">
      <p className="input__label color--grey-lighter">Status</p>
      <Field
        name="status"
        checked={isActiveStatus}
        label="Active"
        theSwitch
        component={Checkbox}
      />
    </div>
  );
};

StatusField.propTypes = {
  isActiveStatus: PropTypes.bool,
};

export default StatusField;
