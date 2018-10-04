import {APPS_FETCH_SUCCESS} from '../../action-types';
import { errorFetchApps } from '../../data/entities/apps';
import { requestApps } from '../../data/entities/apps';

export default (state = false, action) => {
  switch (action.payload) {
    case requestApps:
      return true;
    case errorFetchApps:
    case APPS_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const getIsLoaderApps = state => state.ui.applications.loader;
