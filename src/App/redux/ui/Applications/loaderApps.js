import { combineActions, handleActions } from 'redux-actions';

import { requestApps, receiveApps, errorFetchApps } from '../../data/entities/apps';

const initialState = false;

export default handleActions(
  {
    [requestApps]: () => true,
    [combineActions(receiveApps, errorFetchApps)]: () => false,
  },
  initialState,
);

export const getIsLoaderApps = state => state.ui.applications.loader;
