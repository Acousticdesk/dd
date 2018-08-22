import React from 'react';
import { Field } from 'redux-form';

import Input from '../../../Form/Input/index';

const ApplicationTextFields = () => {
  return (
    <React.Fragment>
      <div className="application-info__field-container">
        <Field
          name="name"
          label="Package Name"
          component={Input}
        />
      </div>
      <div className="application-info__field-container">
        <Field
          name="package"
          label="Application Name"
          component={Input}
        />
      </div>
    </React.Fragment>
  );
};

export default ApplicationTextFields;
