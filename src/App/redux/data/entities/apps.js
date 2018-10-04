import { createAction, handleAction } from 'redux-actions';

import { receivePlacements } from './placements';
import API from '../../../../API';

export const requestApps = createAction('APPS_FETCH_REQUEST');

export const errorFetchApps = createAction('APPS_FETCH_FAIL', (err) => err);

const receiveApps = createAction('APPS_FETCH_SUCCESS', (apps) => apps);

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

const getNormalizedPlacements = apps => {
  const result = {
    byId: {},
    byAppId: {},
    allIds: [],
  };

  Object.keys(apps).forEach(key => {
    const placements = apps[key].placements;

    result.byId = {
      ...result.byId,
      ...placements,
    };

    result.byAppId[key] = placements;

    delete apps[key].placements;
  });

  return result;
};

export const getApps = state => state.data.entities.apps;
export const getAppById = state => id => state.data.entities.apps[id];

export const getPlacements = state => state.data.entities.placements;
export const getPlacementById = state => id => state.data.entities.placements[id];

export default appsReducer;
