import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import applicationsDataReducer from './data/Applications';
import entitiesReducer from './data/entities';
import mobileSidebarReducer from './ui/mobileSidebar';
import mobileViewportReducer from './ui/mobileViewport';
import applicationsUIReducer from './ui/Applications';

const uiReducer = combineReducers({
  applications: applicationsUIReducer,
  mobileSidebarShow: mobileSidebarReducer,
  isMobileViewport: mobileViewportReducer,
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
