import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import RequiredFields from './RequiredFields';

const FieldsContainer = ({
  close,
  placement,
  onSettingsChange,
  adUnitTypeOptions,
  extraFields,
}) => (
  <div className="placement-settings__fields-container">
    <Header close={close} placement={placement} />
    <RequiredFields
      onSettingsChange={onSettingsChange}
      adUnitTypeOptions={adUnitTypeOptions}
    />
    {extraFields}
  </div>
);

FieldsContainer.defaultProps = {
  close: null,
  placement: null,
  onSettingsChange: null,
  adUnitTypeOptions: null,
  extraFields: null,
};

FieldsContainer.propTypes = {
  close: PropTypes.func,
  placement: PropTypes.shape(),
  onSettingsChange: PropTypes.func,
  adUnitTypeOptions: PropTypes.arrayOf(),
  extraFields: PropTypes.arrayOf(PropTypes.element),
};

export default FieldsContainer;
