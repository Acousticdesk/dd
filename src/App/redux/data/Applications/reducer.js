import { combineReducers } from 'redux';

import placementSettingsReducer from './placementSettings';
import appEditReducerData from './appEdit';
import selectedAppReducer from './appSelect';
import placementSelectReducer from './placementSelect';
import isPlacementConfirmModalReducer from './isPlacementConfirmModal';

const applicationsDataReducer = combineReducers({
  appEdit: appEditReducerData,
  appSelected: selectedAppReducer,
  placementSelected: placementSelectReducer,
  placementSettings: placementSettingsReducer,
  isPlacementConfirmModal: isPlacementConfirmModalReducer,
});

export default applicationsDataReducer;
