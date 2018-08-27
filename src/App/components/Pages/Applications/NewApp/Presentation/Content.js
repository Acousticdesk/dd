import React from 'react';
import PropTypes from 'prop-types';

import RenderLoader from './RenderLoader';

const Content = ({integrationSelect, appTextFields, statusField, loader, platformSelect}) => {
  return (
    <div className="modal__content">
      <RenderLoader loader={loader}/>
      {platformSelect}
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
  selectedPlatform: PropTypes.string,
  defaultSelectedPlatform: PropTypes.string,
  platformSelect: PropTypes.element,
};

export default Content;
