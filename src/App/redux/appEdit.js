const initialAppState = {
  idAppEdit: null,
};

const appEditReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'APP_MODAL_SHOW_EDIT':
      return {
        ...state,
        idAppEdit: action.payload
      };
    case 'APP_MODAL_SHOW_CREATE':
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

export const editApp = (id) => ({
  type: 'APP_MODAL_SHOW_EDIT',
  payload: id,
});

export const createApp = () => ({
  type: 'APP_MODAL_SHOW_CREATE',
});

export const appModalClose = () => ({
  type: 'APP_MODAL_CLOSE',
});

export const getIdAppEdit = state => state.app.appEdit.idAppEdit;
export const getIsCreatingNewApp = state => state.app.appEdit.isCreatingNewApp;

export default appEditReducer;
