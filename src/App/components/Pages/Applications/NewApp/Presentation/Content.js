import React from 'react';
import PropTypes from 'prop-types';

import RenderLoader from './RenderLoader';
import PlatformSelect from '../../PlatformSelect';

const Content = ({integrationSelect, appTextFields, statusField, loader, selectedPlatform}) => {
  return (
    <div className="modal__content">
      <RenderLoader loader={loader}/>
      <PlatformSelect selected={selectedPlatform}/>
      {integrationSelect}
      <div className="application-info">
        {appTextFields}
        {statusField}
      </div>
    </div>
  );
};

Content.propTypes = {
  onPlatformChange: PropTypes.func,
  integrationSelect: PropTypes.element,
  statusField: PropTypes.element,
  appTextFields: PropTypes.element,
  loader: PropTypes.bool,
  selectedPlatform: PropTypes.string
};

export default Content;
