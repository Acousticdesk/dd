import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlacementPromptModal from './PlacementPromptModal';
import { getIdPlacementToDelete, placementToDeleteUpdate as placementToDeleteUpdateImport } from '../../../redux/ui/Applications/placementToDelete';

const Content = () => (
  <div className="modal__content modal__content--placement-delete">
    <p className="text--big placement-delete-text">
      It looks like you want to delete the placement.
      <br />
      Are you sure?
    </p>
  </div>
);

const PlacementDeleteModal = ({ idPlacementToDelete, placementToDeleteUpdate }) => (
  idPlacementToDelete
    ? (
      <PlacementPromptModal
        close={() => placementToDeleteUpdate(null)}
        content={<Content />}
        confirmText="Delete"
        placementId={idPlacementToDelete}
      />
    )
    : null
);

PlacementDeleteModal.defaultProps = {
  idPlacementToDelete: null,
  placementToDeleteUpdate: PropTypes.func,
};

PlacementDeleteModal.propTypes = {
  idPlacementToDelete: PropTypes.number,
  placementToDeleteUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  idPlacementToDelete: getIdPlacementToDelete(state),
});

const mapDispatchToProps = dispatch => ({
  placementToDeleteUpdate: bindActionCreators(placementToDeleteUpdateImport, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacementDeleteModal);
