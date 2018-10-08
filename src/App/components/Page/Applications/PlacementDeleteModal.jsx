import React from 'react';
import PropTypes from 'prop-types';

import PlacementPromptModal from './PlacementPromptModal/index';

const Content = () => (
  <div className="modal__content modal__content--placement-delete">
    <p className="text--big placement-delete-text">
      It looks like you want to delete the placement.
      <br />
      Are you sure?
    </p>
  </div>
);

const PlacementDeleteModal = ({ close, placementId }) => (
  <PlacementPromptModal close={close} content={<Content />} confirmText="Delete" placementId={placementId} />
);

PlacementDeleteModal.defaultProps = {
  close: null,
  placementId: null,
};

PlacementDeleteModal.propTypes = {
  close: PropTypes.func,
  placementId: PropTypes.number,
};

export default PlacementDeleteModal;
