import { APPS_FETCH_FAIL, APPS_FETCH_REQUEST, APPS_FETCH_SUCCESS } from '../../action-types';
import { receivePlacements } from './placements';
import API from '../../../../API';

const appsReducer = (state = {}, action) => {
  switch (action.type) {
    case APPS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const requestApps = () => ({
  type: APPS_FETCH_REQUEST,
});

const receiveApps = (apps) => ({
  type: APPS_FETCH_SUCCESS,
  payload: apps,
});

const errorFetchApps = (err) => ({
  type: APPS_FETCH_FAIL,
  payload: err,
});

export const fetchApps = () => dispatch => {
  dispatch(requestApps());
  return API.request('getApps')
    .then(res => res.json())
    .then(apps => {
      const placements = getPlacements(apps.results);

      dispatch(receiveApps(apps.results));
      dispatch(receivePlacements(placements));
    })
    .catch(err => dispatch(errorFetchApps(err)));
};

const getPlacements = apps => {
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

export const getPlacementById = (appId, placementId) => {
  if (!this.props.apps || !appId) {
    return null;
  }
  if (!placementId) {
    return Object.entries(this.props.apps[appId].placements)[0][1];
  }
  return this.props.apps[appId].placements[placementId];
};

export default appsReducer;
