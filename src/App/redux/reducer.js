import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appEditReducerUI from './ui/appEdit';
import appEditReducerData from './data/appEdit';

const uiReducer = combineReducers({
  applications: combineReducers({
    appEdit: appEditReducerUI
  })
});

const dataReducer = combineReducers({
  applications: combineReducers({
    appEdit: appEditReducerData
  })
});

export default combineReducers({
  form: formReducer,
  ui: uiReducer,
  data: dataReducer,
});
