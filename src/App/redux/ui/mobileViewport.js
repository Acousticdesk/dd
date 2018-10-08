import { createAction, handleAction } from 'redux-actions';

export const viewportChange = createAction('VIEWPORT_CHANGE', isMobile => isMobile);

const initialState = false;

export default handleAction(
  viewportChange,
  (state, action) => (typeof action.payload !== 'undefined' ? action.payload : !state),
  initialState,
);

export const getIsMobileViewport = state => state.ui.isMobileViewport;
