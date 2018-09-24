import { APP_EDIT, APP_MODAL_SHOW, APP_MODAL_HIDE } from '../action-types';

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

export const appEdit = () => ({
  type: APP_EDIT,
});

export const getIsAppModalShow = state => state.ui.applications.appEdit.appModalShow;

export default appEditReducer;
