import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Radio from '../../../Form/Radio/index';

const isChecked = selected => i => selected === i;

const Integrations = ({ integrations, integrationSelected, isDisabled }) => {
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

Integrations.defaultProps = {
  integrations: null,
  integrationSelected: null,
  isDisabled: null,
};

Integrations.propTypes = {
  integrations: PropTypes.shape(),
  integrationSelected: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Integrations;
