import { SETTINGS_APPS_FETCH_REQUEST, SETTINGS_APPS_FETCH_SUCCESS, SETTINGS_APPS_FETCH_FAIL } from '../../action-types';
import API from '../../../../API';

export default (state = {}, action) => {
  switch (action.type) {
    case SETTINGS_APPS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const settingsAppsRequest = () => ({
  type: SETTINGS_APPS_FETCH_REQUEST,
});

const settingsAppsReceive = (settings) => ({
  type: SETTINGS_APPS_FETCH_SUCCESS,
  payload: settings,
});

export const fetchSettingsApps = () => dispatch => {
  dispatch(settingsAppsRequest());
  return API.request('getSettings')
    .then(res => res.json())
    .then(settings => dispatch(settingsAppsReceive(settings.adUnitTypes)));
};

export const getSettingsApps = state => state.data.applications.settings;
