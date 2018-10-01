import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appEditReducerUI from './ui/Applications/appEdit';
import applicationsDataReducer from './data/Applications/reducer';
import entitiesReducer from './data/entities';
import loaderAppsReducer from './ui/Applications/loaderApps';
import placementSettingsReducer from './ui/Applications/placementSettings';
import selectedAppReducer from './ui/Applications/appSelect';
import isPlacementConfirmModalReducer from './ui/Applications/isPlacementConfirmModal';
import placementSelectReducer from './ui/Applications/placementSelect';

const uiReducer = combineReducers({
  applications: combineReducers({
    appEdit: appEditReducerUI,
    loader: loaderAppsReducer,
    appSelected: selectedAppReducer,
    placementSelected: placementSelectReducer,
    placementSettings: placementSettingsReducer,
    isPlacementConfirmModal: isPlacementConfirmModalReducer,
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
