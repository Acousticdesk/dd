import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../Layout/Modal';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

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
  const RenderHeader = () => <Header close={close}/>;
  const RenderContent = () => (
    <Content
      loader={loader}
      statusField={statusField}
      onPlatformChange={onPlatformChange}
      appTextFields={appTextFields}
      integrationSelect={integrationSelect}/>
  );
  const RenderFooter = () => <Footer close={close} createApp={createApp}/>;

  return (
    <Modal
      close={close}
      header={RenderHeader()}
      content={RenderContent()}
      footer={RenderFooter()}
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
