import { createAction, handleAction } from 'redux-actions';

export const receivePlacements = createAction('PLACEMENTS_RECEIVE', placements => placements);

const initialState = {
  byId: {},
  byAppId: {},
};

export default handleAction(
  receivePlacements,
  (state, action) => action.payload,
  initialState,
);

export const getPlacements = state => state.data.entities.placements;
export const getPlacementById = state => id => state.data.entities.placements[id];

export const getNormalizedPlacements = apps => {
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
