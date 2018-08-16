import React from 'react';
import PropTypes from 'prop-types';

import Radio from '../Radio';

const Integrations = ({integrations, onIntegrationChange, integrationSelected}) => {
  return integrations.map((i) => (
    <Radio
      key={i}
      value={i}
      name="integration"
      onChange={onIntegrationChange}
      checked={integrationSelected === i}
      label={i}/>
  ));
};

Integrations.propTypes = {
  integrations: PropTypes.array,
  onIntegrationChange: PropTypes.func,
  integrationSelected: PropTypes.string
};

export default Integrations;
