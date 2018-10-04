import { createAction, handleActions } from 'redux-actions';

export const placementConfirmModalShow = createAction('PLACEMENT_CONFIRM_MODAL_SHOW');
export const placementConfirmModalHide = createAction('PLACEMENT_CONFIRM_MODAL_HIDE');

const initialState = false;

export default handleActions(
  {
    [placementConfirmModalShow]: () => true,
    [placementConfirmModalHide]: () => false,
  },
  initialState,
);

export const getIsPlacementConfirmModal = state => state.ui.applications.isPlacementConfirmModal;
