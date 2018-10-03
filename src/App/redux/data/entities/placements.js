import {PLACEMENTS_RECEIVE} from '../../action-types';

export default (state = [], action) => {
  switch (action.type) {
    case PLACEMENTS_RECEIVE:
      return action.payload;
    default:
      return state;
  }
};

export const receivePlacements = (placements) => ({
  type: PLACEMENTS_RECEIVE,
  payload: placements,
});
