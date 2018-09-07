import React from 'react';
import PropTypes from 'prop-types';

import PlacementPromptModal from './PlacementPromptModal';

const Content = () => {
  return (
    <div className="modal__content modal__content--placement-delete">
      <p className="text--big placement-delete-text">
        It looks like you want to delete the placement.
        <br/>
        Are you sure?
      </p>
    </div>
  );
};

const PlacementDeleteModal = ({close, placementId}) => {
  return <PlacementPromptModal close={close} content={<Content />} confirmText="Delete" placementId={placementId} />
};

PlacementDeleteModal.propTypes = {
  close: PropTypes.func,
  placementId: PropTypes.number,
};

export default PlacementDeleteModal;
