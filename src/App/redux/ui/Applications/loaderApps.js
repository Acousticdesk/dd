import {APPS_FETCH_FAIL, APPS_FETCH_REQUEST, APPS_FETCH_SUCCESS} from '../../action-types';

export default (state = false, action) => {
  switch (action.payload) {
    case APPS_FETCH_REQUEST:
      return true;
    case APPS_FETCH_FAIL:
    case APPS_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const getIsLoaderApps = state => state.ui.applications.loader;
