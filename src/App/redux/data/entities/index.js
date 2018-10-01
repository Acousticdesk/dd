import { combineReducers } from 'redux';

import appsReducer from './apps';

export default combineReducers({
  apps: appsReducer
});
