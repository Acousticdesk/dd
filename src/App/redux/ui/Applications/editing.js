import { createAction, handleActions } from 'redux-actions';

export const appEdit = createAction('APP_EDIT', id => id);

export const appModalShow = createAction('APP_MODAL_SHOW');

export const appModalHide = createAction('APP_MODAL_HIDE');

export const loader = createAction('APP_MODAL_LOADER', isLoader => isLoader);

const initialState = {
  modal: false,
};

export default handleActions(
  {
    [appEdit]: (state, action) => ({
      ...state,
      modal: true,
      id: action.payload,
    }),
    [appModalShow]: state => ({
      ...state,
      modal: true,
    }),
    [appModalHide]: state => ({
      ...state,
      modal: false,
      id: null,
    }),
    [loader]: (state, action) => ({
      ...state,
      loader: action.payload,
    }),
  },
  initialState,
);

export const getIdAppEdit = state => state.ui.applications.editing.id;
export const getIsAppModalShow = state => state.ui.applications.editing.modal;
export const getLoaderState = state => state.ui.applications.editing.loader;
