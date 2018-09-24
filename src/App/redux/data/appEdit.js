import { APP_EDIT, APP_MODAL_HIDE } from '../action-types';

const initialAppState = {
  id: null,
};

const appEditReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case APP_EDIT:
      return {
        ...state,
        id: action.payload,
      };
    case APP_MODAL_HIDE:
      return {
        ...state,
        id: null
      };
    default:
      return state;
  }
};

export const appEdit = (id) => ({
  type: APP_EDIT,
  payload: id
});

export const getIdAppEdit = state => state.data.applications.appEdit.id;

export default appEditReducer;
