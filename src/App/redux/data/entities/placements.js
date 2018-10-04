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
