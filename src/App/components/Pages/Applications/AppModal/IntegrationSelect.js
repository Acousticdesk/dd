import React from 'react';
import PropTypes from 'prop-types';

import Integrations from './Integrations';

const IntegrationSelect = ({
  onIntegrationChange,
  integrationSelected,
  integrations,
  isDisabled
}) => {
  return (
    <div className="integration-select">
      <div className="integration-select__legend-container">
        <div className={`text-lead ${isDisabled ? 'color--disabled' : 'color--dark'}`}>Select Integration</div>
      </div>
      <div className="integration-select__options-container">
        <Integrations
          isDisabled={isDisabled}
          integrations={integrations}
          onIntegrationChange={onIntegrationChange}
          integrationSelected={integrationSelected}/>
      </div>
    </div>
  );
};

IntegrationSelect.propTypes = {
  onIntegrationChange: PropTypes.func,
  integrationSelected: PropTypes.string,
  integrations: PropTypes.object,
  isDisabled: PropTypes.bool,
};

export default IntegrationSelect;
