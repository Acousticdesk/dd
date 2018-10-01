import { PLACEMENT_TO_DELETE_UPDATE } from '../../action-types';

export default (state = null, action) => {
  switch (action.type) {
    case PLACEMENT_TO_DELETE_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export const placementToDeleteUpdate = (id) => ({
  type: PLACEMENT_TO_DELETE_UPDATE,
  payload: id,
});

export const getIdPlacementToDelete = state => state.ui.applications.placementToDelete;
