import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../Layout/Modal';
import Content from './Content';

const NewAppPresentation =
  ({
     close,
     integrationSelect,
     statusField,
     appTextFields,
     loader,
     platformSelect,
     title
   }) => {
  return (
    <Modal
      title={title}
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
  title: PropTypes.string,
};

export default NewAppPresentation;
