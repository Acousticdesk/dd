import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appEditReducer from './appEdit';

const appReducer = combineReducers({
  appEdit: appEditReducer
});

export default combineReducers({
  form: formReducer,
  app: appReducer,
});
