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
     onSubmit,
     platformSelect
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
            appTextFields={appTextFields}
            integrationSelect={integrationSelect}
            platformSelect={platformSelect}
          />
        }
      />
    </form>
  );
};

NewAppPresentation.propTypes = {
  close: PropTypes.func,
  loader: PropTypes.bool,
  integrationSelect: PropTypes.element,
  statusField: PropTypes.element,
  appTextFields: PropTypes.element,
  onSubmit: PropTypes.func,
  platformSelect: PropTypes.element
};

export default NewAppPresentation;
