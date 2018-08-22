import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../Form/Input/index';

const ApplicationTextFields = ({onAppTextFieldChange}) => {
  return (
    <React.Fragment>
      <div className="application-info__field-container">
        <Input
          onChange={onAppTextFieldChange}
          name="name"
          label="Package Name"
        />
      </div>
      <div className="application-info__field-container">
        <Input
          name="package"
          onChange={onAppTextFieldChange}
          label="Application Name"
        />
      </div>
    </React.Fragment>
  );
};

ApplicationTextFields.propTypes = {
  onAppTextFieldChange: PropTypes.func
};

export default ApplicationTextFields;
