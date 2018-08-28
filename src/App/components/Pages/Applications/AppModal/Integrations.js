import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Radio from '../../../Form/Radio';

const isChecked = (selected) => i => {
  return selected === i;
};

const Integrations = ({integrations, integrationSelected, isDisabled}) => {
  const checked = isChecked(integrationSelected);

  return Object.keys(integrations).map((i) => {
    const label = integrations[i];

    return (
      <Field
        disabled={isDisabled}
        key={i}
        value={i}
        name="integration"
        checked={checked(i)}
        label={label}
        type="radio"
        component={Radio}
      />
    );
  });
};

Integrations.propTypes = {
  integrations: PropTypes.array,
  integrationSelected: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Integrations;
