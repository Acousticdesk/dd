import placementSettingsReducer from './placementSettings';
import loaderAppsReducer from './loaderApps';
import placementToDeleteReducer from './placementToDelete';
import { combineReducers } from 'redux';
import placementSelectReducer from './placementSelect';
import appEditReducerUI from './editing';
import selectedAppReducer from './selected';
import isPlacementConfirmModalReducer from './isPlacementConfirmModal';

export default combineReducers({
  editing: appEditReducerUI,
  loader: loaderAppsReducer,
  selected: selectedAppReducer,
  placementSelected: placementSelectReducer,
  placementSettings: placementSettingsReducer,
  isPlacementConfirmModal: isPlacementConfirmModalReducer,
  placementToDelete: placementToDeleteReducer,
});
