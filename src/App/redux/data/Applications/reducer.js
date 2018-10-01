import { combineReducers } from 'redux';

import placementSettingsReducer from '../../ui/Applications/placementSettings';
import selectedAppReducer from '../../ui/Applications/appSelect';
import placementSelectReducer from '../../ui/Applications/placementSelect';
import isPlacementConfirmModalReducer from '../../ui/Applications/isPlacementConfirmModal';
import settingsReducer from './settings';

const applicationsDataReducer = combineReducers({
  settings: settingsReducer,
});

export default applicationsDataReducer;
