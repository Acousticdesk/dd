import { APP_SELECT } from '../../action-types';

const initialAppState = {
  id: null,
};

const selectedAppReducer = (state = initialAppState, action) => {
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

export const getIdAppSelected = state => state.data.applications.appSelected.id;

export default selectedAppReducer;
