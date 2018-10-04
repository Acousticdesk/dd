import { combineReducers } from 'redux';

import settingsReducer from './settings';

const applicationsDataReducer = combineReducers({
  settings: settingsReducer,
});

export default applicationsDataReducer;
