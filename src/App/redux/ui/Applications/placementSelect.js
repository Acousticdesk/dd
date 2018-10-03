import { PLACEMENT_SELECT } from '../../action-types';

const initialState = null;

const placementSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACEMENT_SELECT:
      return action.payload;
    default:
      return state;
  }
};

export const placementSelect = placement => ({
  type: PLACEMENT_SELECT,
  payload: placement,
});

export const getPlacementSelected = state => state.ui.applications.placementSelected;

export default placementSelectReducer;
