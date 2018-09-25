import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appEditReducerUI from './ui/Applications/appEdit';
import applicationsDataReducer from './data/Applications/reducer';

const uiReducer = combineReducers({
  applications: combineReducers({
    appEdit: appEditReducerUI,
  }),
});

const dataReducer = combineReducers({
  applications: applicationsDataReducer,
});

export default combineReducers({
  form: formReducer,
  ui: uiReducer,
  data: dataReducer,
});
