import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Radio from '../../../Form/Radio';

const isChecked = (selected, defaultSelected) => i => {
  return selected ? selected === i : defaultSelected === i;
};

const Integrations = ({integrations, integrationSelected, defaultSelected}) => {
  const checked = isChecked(integrationSelected, defaultSelected);

  return Object.keys(integrations).map((i) => {
    const label = integrations[i];

    return (
      <Field
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
  defaultSelected: PropTypes.string
};

export default Integrations;
