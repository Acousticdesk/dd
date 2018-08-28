import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../Layout/Modal';
import Header from './Header';

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

const DeletePlacementModal = ({close, placementId}) => {
  const RenderHeader = () => <Header close={close} placementId={placementId}/>;

  return (
    <Modal
      header={<RenderHeader/>}
      confirmText="Delete"
      close={close}
      content={<Content/>}/>
  );
};

DeletePlacementModal.propTypes = {
  close: PropTypes.func,
  placementId: PropTypes.number
};

export default DeletePlacementModal;
