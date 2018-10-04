import { createAction, handleAction } from 'redux-actions';

import API from '../../../../API';

import { receivePlacements } from './placements';
import { getNormalizedPlacements } from './placements';

export const requestApps = createAction('APPS_FETCH_REQUEST');

export const errorFetchApps = createAction('APPS_FETCH_FAIL', (err) => err);

export const receiveApps = createAction('APPS_FETCH_SUCCESS', apps => apps);

const initialState = {};

const appsReducer = handleAction(
  receiveApps,
  (state, action) => action.payload,
  initialState,
);

export const fetchApps = () => dispatch => {
  dispatch(requestApps());
  return API.request('getApps')
    .then(res => res.json())
    .then(apps => {
      const placements = getNormalizedPlacements(apps.results);

      dispatch(receiveApps(apps.results));
      dispatch(receivePlacements(placements));
    })
    .catch(err => dispatch(errorFetchApps(err)));
};

export const getApps = state => state.data.entities.apps;
export const getAppById = state => id => state.data.entities.apps[id];

export default appsReducer;
