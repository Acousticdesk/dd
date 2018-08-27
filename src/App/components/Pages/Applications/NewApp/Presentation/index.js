import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../Layout/Modal/index';
import Content from './Content';

const NewAppPresentation =
  ({
     close,
     integrationSelect,
     statusField,
     appTextFields,
     loader,
     platformSelect
   }) => {
  return (
    <Modal
      title="New Application"
      close={close}
      content={
        <Content
          loader={loader}
          statusField={statusField}
          appTextFields={appTextFields}
          integrationSelect={integrationSelect}
          platformSelect={platformSelect}
        />
      }
    />
  );
};

NewAppPresentation.propTypes = {
  close: PropTypes.func,
  loader: PropTypes.bool,
  integrationSelect: PropTypes.element,
  statusField: PropTypes.element,
  appTextFields: PropTypes.element,
  platformSelect: PropTypes.element,
};

export default NewAppPresentation;
