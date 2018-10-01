import { APP_EDIT, APP_MODAL_SHOW, APP_MODAL_HIDE, APP_MODAL_LOADER } from '../../action-types';

const initialAppState = {
  modal: false,
};

const appEditReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case APP_EDIT:
      return {
        ...state,
        modal: true,
        id: action.payload,
      };
    case APP_MODAL_SHOW:
      return {
        ...state,
        modal: true,
      };
    case APP_MODAL_HIDE:
      return {
        ...state,
        modal: false,
        id: null,
      };
    case APP_MODAL_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
};

export const appModalShow = () => ({
  type: APP_MODAL_SHOW,
});

export const appModalHide = () => ({
  type: APP_MODAL_HIDE,
});

export const loader = (isLoader) => ({
  type: APP_MODAL_LOADER,
  payload: isLoader
});

export const appEdit = (id) => ({
  type: APP_EDIT,
  payload: id
});

export const getIdAppEdit = state => state.ui.applications.editing.id;
export const getIsAppModalShow = state => state.ui.applications.editing.modal;
export const getLoaderState = state => state.ui.applications.editing.loader;

export default appEditReducer;
