import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../Layout/Modal/index';
import Content from './Content';

const NewAppPresentation =
  ({
     close,
     integrationSelect,
     onPlatformChange,
     createApp,
     statusField,
     appTextFields,
     loader
   }) => {
  const RenderContent = () => (
    <Content
      loader={loader}
      statusField={statusField}
      onPlatformChange={onPlatformChange}
      appTextFields={appTextFields}
      integrationSelect={integrationSelect}/>
  );
  return (
    <Modal
      onSubmit={createApp}
      title="New Application"
      close={close}
      content={RenderContent()}
    />
  );
};

NewAppPresentation.propTypes = {
  close: PropTypes.func,
  loader: PropTypes.bool,
  onPlatformChange: PropTypes.func,
  integrationSelect: PropTypes.element,
  statusField: PropTypes.element,
  appTextFields: PropTypes.element,
};

export default NewAppPresentation;
