import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../../Form/Checkbox';

const StatusField = ({onStatusChange, isActiveStatus}) => {
  return (
    <div className="application-info__field-container">
      <p className="input__label color--grey-lighter">Status</p>
      <Checkbox
        onChange={onStatusChange}
        checked={isActiveStatus}
        label="Active"
        theSwitch
      />
    </div>
  );
};

StatusField.propTypes = {
  onStatusChange: PropTypes.func,
  isActiveStatus: PropTypes.bool,
};

export default StatusField;
