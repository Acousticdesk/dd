import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../Layout/Modal/index';
import Content from './Content';

const NewAppPresentation =
  ({
     close,
     integrationSelect,
     onPlatformChange,
     statusField,
     appTextFields,
     loader,
     onSubmit
   }) => {
  return (
    <form onSubmit={onSubmit}>
      <Modal
        title="New Application"
        close={close}
        content={
          <Content
            loader={loader}
            statusField={statusField}
            onPlatformChange={onPlatformChange}
            appTextFields={appTextFields}
            integrationSelect={integrationSelect}
          />
        }
      />
    </form>
  );
};

NewAppPresentation.propTypes = {
  close: PropTypes.func,
  loader: PropTypes.bool,
  onPlatformChange: PropTypes.func,
  integrationSelect: PropTypes.element,
  statusField: PropTypes.element,
  appTextFields: PropTypes.element,
  onSubmit: PropTypes.func
};

export default NewAppPresentation;
