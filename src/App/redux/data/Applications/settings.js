import { createAction, handleAction } from 'redux-actions';

import API from '../../../../API';

export const settingsAppsRequest = createAction('SETTINGS_APPS_FETCH_REQUEST');
export const settingsAppsReceive = createAction('SETTINGS_APPS_RECEIVE', settings => settings);

const initialState = {};

export default handleAction(
  settingsAppsReceive,
  (state, action) => action.payload,
  initialState,
);

export const fetchSettingsApps = () => dispatch => {
  dispatch(settingsAppsRequest());
  return API.request('getSettings')
    .then(res => res.json())
    .then(settings => dispatch(settingsAppsReceive(settings.adUnitTypes)));
};

export const getSettingsApps = state => state.data.applications.settings;
