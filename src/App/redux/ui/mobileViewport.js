import { VIEWPORT_CHANGE } from '../action-types';

export default (state = false, action) => {
  switch (action.type) {
    case VIEWPORT_CHANGE:
      return typeof action.payload !== 'undefined' ? action.payload : !state;
    default:
      return state;
  }
};

export const viewportChange = (isMobile) => ({
  type: VIEWPORT_CHANGE,
  payload: isMobile,
});

export const getIsMobileViewport = state => state.ui.isMobileViewport;
