import { PLACEMENT_CONFIRM_MODAL_SHOW, PLACEMENT_CONFIRM_MODAL_HIDE } from '../../action-types';

const initialState = false;

const isPlacementConfirmModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACEMENT_CONFIRM_MODAL_SHOW:
      return true;
    case PLACEMENT_CONFIRM_MODAL_HIDE:
      return false;
    default:
      return state;
  }
};

export const placementConfirmModalShow = () => ({
  type: PLACEMENT_CONFIRM_MODAL_SHOW,
});

export const placementConfirmModalHide = () => ({
  type: PLACEMENT_CONFIRM_MODAL_HIDE,
});

export const getIsPlacementConfirmModal = state => state.data.applications.isPlacementConfirmModal;

export default isPlacementConfirmModalReducer;
