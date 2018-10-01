import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appEditReducerUI from './ui/Applications/appEdit';
import applicationsDataReducer from './data/Applications/reducer';
import entitiesReducer from './data/entities';
import loaderAppsReducer from './ui/Applications/loaderApps';

const uiReducer = combineReducers({
  applications: combineReducers({
    appEdit: appEditReducerUI,
    loader: loaderAppsReducer
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
