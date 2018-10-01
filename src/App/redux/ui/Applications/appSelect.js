import { APP_SELECT } from '../../action-types';

const initialState = null;

const selectedAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_SELECT:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export const appSelect = id => ({
  type: APP_SELECT,
  payload: id,
});

export const getIdAppSelected = state => state.ui.applications.appSelected && state.ui.applications.appSelected.id;

export default selectedAppReducer;
