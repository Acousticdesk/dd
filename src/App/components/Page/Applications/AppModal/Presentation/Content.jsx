import React from 'react';
import PropTypes from 'prop-types';

import RenderLoader from './RenderLoader';

const Content = ({
  integrationSelect,
  appTextFields,
  statusField,
  loader,
  platformSelect,
}) => (
  <div className="modal__content">
    <RenderLoader loader={loader} />
    {platformSelect}
    {integrationSelect}
    <div className="application-info">
      {appTextFields}
      {statusField}
    </div>
  </div>
);

Content.defaultProps = {
  integrationSelect: null,
  statusField: null,
  appTextFields: null,
  loader: null,
  platformSelect: null,
};

Content.propTypes = {
  integrationSelect: PropTypes.element,
  statusField: PropTypes.element,
  appTextFields: PropTypes.element,
  loader: PropTypes.bool,
  platformSelect: PropTypes.element,
};

export default Content;
