import React from 'react';
import PropTypes from 'prop-types';

import Integrations from './Integrations';

const IntegrationSelect = ({availableIntegrations, onIntegrationChange, integrationSelected, defaultSelected}) => {
  return (
    <div className="integration-select">
      <div className="integration-select__legend-container">
        <div className="text-lead color--dark">Select Integration</div>
      </div>
      <div className="integration-select__options-container">
        <Integrations
          defaultSelected={defaultSelected}
          integrations={availableIntegrations}
          onIntegrationChange={onIntegrationChange}
          integrationSelected={integrationSelected}/>
      </div>
    </div>
  );
};

IntegrationSelect.propTypes = {
  onIntegrationChange: PropTypes.func,
  integrationSelected: PropTypes.string,
  availableIntegrations: PropTypes.array,
  defaultSelected: PropTypes.string
};

export default IntegrationSelect;
