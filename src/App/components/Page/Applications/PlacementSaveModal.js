import React from 'react';
import PropTypes from 'prop-types';

import PlacementPromptModal from './PlacementPromptModal';

const Content = () => {
  return (
    <div className="modal__content modal__content--placement-delete">
      <p className="text--big placement-delete-text">
        It looks like you made some changes to the placement.
        <br/>
        Are you sure you want to exit without saving?
      </p>
    </div>
  );
};

const PlacementSaveModal = ({close, placementId, submitForm}) => {
  return (
    <PlacementPromptModal
      close={close}
      content={<Content />}
      confirmText="Save"
      placementId={placementId}
      onSubmit={submitForm}
    />
  );
};

PlacementSaveModal.propTypes = {
  close: PropTypes.func,
  placementId: PropTypes.number,
  submitForm: PropTypes.func,
};

export default PlacementSaveModal;
