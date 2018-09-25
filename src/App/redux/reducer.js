import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appEditReducerUI from './ui/Applications/appEdit';
import appEditReducerData from './data/Applications/appEdit';
import selectedAppReducer from './data/Applications/appSelect';

const uiReducer = combineReducers({
  applications: combineReducers({
    appEdit: appEditReducerUI
  })
});

const dataReducer = combineReducers({
  applications: combineReducers({
    appEdit: appEditReducerData,
    appSelected: selectedAppReducer,
  })
});

export default combineReducers({
  form: formReducer,
  ui: uiReducer,
  data: dataReducer,
});
