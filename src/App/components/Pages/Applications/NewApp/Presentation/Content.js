import React from 'react';
import PropTypes from 'prop-types';

import RenderLoader from './RenderLoader';
import PlatformSelect from '../../PlatformSelect';

const Content = ({onPlatformChange, integrationSelect, appTextFields, statusField, loader}) => {
  return (
    <div className="modal__content">
      <RenderLoader loader={loader}/>
      <PlatformSelect onChange={onPlatformChange}/>
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
  loader: PropTypes.bool
};

export default Content;
