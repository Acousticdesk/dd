import { combineReducers } from 'redux';

import appsReducer from './apps';
import placementsReducer from './placements';

export default combineReducers({
  apps: appsReducer,
  placements: placementsReducer,
});
