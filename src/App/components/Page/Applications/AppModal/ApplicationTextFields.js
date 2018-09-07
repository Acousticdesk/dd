import React from 'react';
import { Field } from 'redux-form';

import { required } from '../../../../validations';

import Input from '../../../Form/Input';

const ApplicationTextFields = () => {
  return (
    <React.Fragment>
      <div className="application-info__field-container">
        <Field
          name="package"
          label="Package Name"
          component={Input}
          validate={[required]}
        />
      </div>
      <div className="application-info__field-container">
        <Field
          name="name"
          label="Application Name"
          component={Input}
          validate={[required]}
        />
      </div>
    </React.Fragment>
  );
};

export default ApplicationTextFields;
