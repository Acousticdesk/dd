import { APPS_FETCH_FAIL, APPS_FETCH_REQUEST, APPS_FETCH_SUCCESS } from '../../action-types';
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
    .then(apps => dispatch(receiveApps(apps.results)))
    .catch(err => dispatch(errorFetchApps(err)));
};

export const getApps = state => state.data.entities.apps;
export const getAppById = state => id => state.data.entities.apps[id];

export default appsReducer;
