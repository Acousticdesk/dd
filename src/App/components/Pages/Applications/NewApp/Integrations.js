import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Radio from '../../../Form/Radio';

const Integrations = ({integrations, integrationSelected}) => {
  return integrations.map((i) => (
    <Field
      key={i}
      value={i}
      name="integration"
      checked={integrationSelected === i}
      label={i}
      type="radio"
      component={Radio}
    />
  ));
};

Integrations.propTypes = {
  integrations: PropTypes.array,
  integrationSelected: PropTypes.string
};

export default Integrations;
