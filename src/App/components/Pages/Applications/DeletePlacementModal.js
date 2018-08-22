import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../Layout/Modal';

const DeletePlacementModal = () => {
  return (
    <Modal content={<p>I am a modal!</p>}/>
  );
};

DeletePlacementModal.propTypes = {
  close: PropTypes.func
};

export default DeletePlacementModal;
