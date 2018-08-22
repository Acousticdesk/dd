import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../Layout/Modal';

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

const DeletePlacementModal = ({close, placementId}) => {
  return (
    <Modal
      title={`Placement (${placementId})`}
      close={close}
      content={<Content/>}/>
  );
};

DeletePlacementModal.propTypes = {
  close: PropTypes.func,
  placementId: PropTypes.number
};

export default DeletePlacementModal;
