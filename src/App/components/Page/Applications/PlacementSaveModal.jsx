import React from 'react';
import PropTypes from 'prop-types';
import { connect, bindActionCreators } from 'redux';

import { placementSelect as placementSelectImport, getPlacementSelected } from '../../../redux/ui/Applications/placementSelect';
import { getPlacementById as getPlacementByIdImport } from '../../../redux/data/entities/placements';
import {
  placementSettingsReset as placementSettingsResetImport,
  rememberPlacementToGoAfterConfirm as rememberPlacementToGoAfterConfirmImport,
  getIdPlacementToGoAfterConfirm,
} from '../../../redux/ui/Applications/placementSettings';

import PlacementPromptModal from './PlacementPromptModal';
import { placementConfirmModalHide as placementConfirmModalHideImport, getIsPlacementConfirmModal } from '../../../redux/ui/Applications/isPlacementConfirmModal';

const Content = () => (
  <div className="modal__content modal__content--placement-delete">
    <p className="text--big placement-delete-text">
      It looks like you made some changes to the placement.
      <br />
      Are you sure you want to exit without saving?
    </p>
  </div>
);

const PlacementSaveModal = ({
  submitForm,
  isPlacementConfirmModal,
  placementSelected,
  getPlacementById,
  idPlacementToGoAfterConfirm,
  placementSettingsReset,
  placementConfirmModalHide,
  placementSelect,
  rememberPlacementToGoAfterConfirm,
}) => {
  const closePlacementSaveModal = () => {
    const placementToGoTo = getPlacementById(idPlacementToGoAfterConfirm);

    placementSettingsReset();
    placementConfirmModalHide();
    placementSelect(placementToGoTo);
    rememberPlacementToGoAfterConfirm(null);
  };

  return (
    isPlacementConfirmModal
      ? (
        <PlacementPromptModal
          close={closePlacementSaveModal}
          content={<Content />}
          confirmText="Save"
          placementId={placementSelected && placementSelected.id}
          onSubmit={submitForm}
        />
      )
      : null
  );
};

PlacementSaveModal.defaultProps = {
  submitForm: null,
  isPlacementConfirmModal: null,
  placementSelected: null,
  getPlacementById: null,
  idPlacementToGoAfterConfirm: null,
  placementSettingsReset: null,
  placementConfirmModalHide: null,
  placementSelect: null,
  rememberPlacementToGoAfterConfirm: null,
};

PlacementSaveModal.propTypes = {
  submitForm: PropTypes.func,
  isPlacementConfirmModal: PropTypes.bool,
  placementSelected: PropTypes.shape(),
  getPlacementById: PropTypes.func,
  idPlacementToGoAfterConfirm: PropTypes.number,
  placementSettingsReset: PropTypes.func,
  placementConfirmModalHide: PropTypes.func,
  placementSelect: PropTypes.func,
  rememberPlacementToGoAfterConfirm: PropTypes.func,
};

const mapStateToProps = state => ({
  isPlacementConfirmModal: getIsPlacementConfirmModal(state),
  placementSelected: getPlacementSelected(state),
  getPlacementById: getPlacementByIdImport(state),
  idPlacementToGoAfterConfirm: getIdPlacementToGoAfterConfirm(state),
});

const mapDispatchToProps = dispatch => ({
  placementSettingsReset: bindActionCreators(placementSettingsResetImport, dispatch),
  placementConfirmModalHide: bindActionCreators(placementConfirmModalHideImport, dispatch),
  placementSelect: bindActionCreators(placementSelectImport, dispatch),
  rememberPlacementToGoAfterConfirm:
    bindActionCreators(rememberPlacementToGoAfterConfirmImport, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacementSaveModal);
