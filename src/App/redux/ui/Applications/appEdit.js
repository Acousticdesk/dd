import {APP_EDIT, APP_MODAL_SHOW, APP_MODAL_HIDE, APP_MODAL_LOADER} from '../../action-types';

const initialAppState = {
  appModalShow: false,
};

const appEditReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case APP_EDIT:
    case APP_MODAL_SHOW:
      return {
        ...state,
        appModalShow: true,
      };
    case APP_MODAL_HIDE:
      return {
        ...state,
        appModalShow: false,
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

export const getIsAppModalShow = state => state.ui.applications.appEdit.appModalShow;
export const getLoaderState = state => state.ui.applications.appEdit.loader;

export default appEditReducer;
