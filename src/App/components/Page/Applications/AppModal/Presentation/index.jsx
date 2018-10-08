import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../Layout/Modal/index';
import Content from './Content';

const NewAppPresentation = ({
  close,
  integrationSelect,
  statusField,
  appTextFields,
  loader,
  platformSelect,
  title,
}) => (
  <Modal
    className="modal modal--mobile-fullscreen"
    title={title}
    close={close}
    content={(
      <Content
        loader={loader}
        statusField={statusField}
        appTextFields={appTextFields}
        integrationSelect={integrationSelect}
        platformSelect={platformSelect}
      />
    )}
  />
);

NewAppPresentation.defaultProps = {
  close: null,
  loader: null,
  integrationSelect: null,
  statusField: null,
  appTextFields: null,
  platformSelect: null,
  title: null,
};

NewAppPresentation.propTypes = {
  close: PropTypes.func,
  loader: PropTypes.bool,
  integrationSelect: PropTypes.element,
  statusField: PropTypes.element,
  appTextFields: PropTypes.element,
  platformSelect: PropTypes.element,
  title: PropTypes.string,
};

export default NewAppPresentation;
