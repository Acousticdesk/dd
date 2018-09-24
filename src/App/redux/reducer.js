import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialAppState = {
  idAppEdit: null
};

export const editApp = (id) => ({
  type: 'EDIT_APP',
  payload: id
});

export const createApp = () => ({
  type: 'CREATE_APP'
});

export const appModalClose = () => ({
  type: 'APP_MODAL_CLOSE'
});

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'EDIT_APP':
      return {
        ...state,
        idAppEdit: action.payload
      };
    case 'CREATE_APP':
      return {
        ...state,
        isCreatingNewApp: true,
      };
    case 'APP_MODAL_CLOSE':
      return {
        ...state,
        isCreatingNewApp: false,
        idAppEdit: null,
      };
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  app: appReducer
});
