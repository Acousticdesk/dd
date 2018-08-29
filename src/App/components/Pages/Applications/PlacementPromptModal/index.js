import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../Layout/Modal';
import Header from './Header';

const PlacementPromptModal = ({close, placementId, content, confirmText, onSubmit}) => {
  const RenderHeader = () => <Header close={close} placementId={placementId}/>;

  return (
    <Modal
      header={<RenderHeader/>}
      confirmText={confirmText}
      close={close}
      content={content}
      onSubmit={onSubmit}
    />
  );
};

PlacementPromptModal.propTypes = {
  close: PropTypes.func,
  placementId: PropTypes.number,
  content: PropTypes.element,
  confirmText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default PlacementPromptModal;
