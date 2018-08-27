import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Radio from '../../../Form/Radio';

const isChecked = (selected, defaultSelected) => i => {
  return selected ? selected === i : defaultSelected === i;
};

const Integrations = ({integrations, integrationSelected, defaultSelected}) => {
  const checked = isChecked(integrationSelected, defaultSelected);

  return integrations.map((i) => (
    <Field
      key={i}
      value={i}
      name="integration"
      checked={checked(i)}
      label={i}
      type="radio"
      component={Radio}
    />
  ));
};

Integrations.propTypes = {
  integrations: PropTypes.array,
  integrationSelected: PropTypes.string,
  defaultSelected: PropTypes.string
};

export default Integrations;
