import { PLACEMENT_SETTINGS_CHANGED, PLACEMENT_SETTINGS_RESET, REMEMBER_PLACEMENT_TO_GO_AFTER_CONFIRM } from '../../action-types';

const initialState = {
  isChanged: false,
};

const placementSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACEMENT_SETTINGS_CHANGED:
      return {
        ...state,
        isChanged: true,
      };
    case PLACEMENT_SETTINGS_RESET:
      return {
        ...state,
        isChanged: false,
      };
    case REMEMBER_PLACEMENT_TO_GO_AFTER_CONFIRM:
      return {
        ...state,
        idPlacementToGoAfterConfirm: action.payload,
      };
    default:
      return state;
  }
};

export const placementSettingsChange = () => ({
  type: PLACEMENT_SETTINGS_CHANGED,
});

export const placementSettingsReset = () => ({
  type: PLACEMENT_SETTINGS_RESET,
});

export const rememberPlacementToGoAfterConfirm = (id) => ({
  type: REMEMBER_PLACEMENT_TO_GO_AFTER_CONFIRM,
  payload: id,
});

export const getIsPlacementSettingsChanged = state => state.ui.applications.placementSettings.isChanged;
export const getIdPlacementToGoAfterConfirm = state => state.ui.applications.placementSettings.idPlacementToGoAfterConfirm;

export default placementSettingsReducer;
