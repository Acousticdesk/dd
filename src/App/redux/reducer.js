import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialAppState = {
  idAppEdit: null
};

export const editApp = (id) => ({
  type: 'EDIT_APP',
  payload: id
});

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'EDIT_APP':
      return {
        ...state,
        idAppEdit: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  app: appReducer
});
