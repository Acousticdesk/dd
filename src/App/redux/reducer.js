import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appEditReducerUI from './ui/Applications/editing';
import applicationsDataReducer from './data/Applications/reducer';
import entitiesReducer from './data/entities';
import loaderAppsReducer from './ui/Applications/loaderApps';
import placementSettingsReducer from './ui/Applications/placementSettings';
import selectedAppReducer from './ui/Applications/selected';
import isPlacementConfirmModalReducer from './ui/Applications/isPlacementConfirmModal';
import placementSelectReducer from './ui/Applications/placementSelect';
import placementToDeleteReducer from './ui/Applications/placementToDelete';

const uiReducer = combineReducers({
  applications: combineReducers({
    editing: appEditReducerUI,
    loader: loaderAppsReducer,
    selected: selectedAppReducer,
    placementSelected: placementSelectReducer,
    placementSettings: placementSettingsReducer,
    isPlacementConfirmModal: isPlacementConfirmModalReducer,
    placementToDelete: placementToDeleteReducer,
  }),
});

const dataReducer = combineReducers({
  applications: applicationsDataReducer,
  entities: entitiesReducer,
});

export default combineReducers({
  form: formReducer,
  ui: uiReducer,
  data: dataReducer,
});
