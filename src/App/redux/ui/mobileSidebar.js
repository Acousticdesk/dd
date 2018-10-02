import { MOBILE_SIDEBAR_TOGGLE } from '../action-types';

export const mobileSidebarToggle = () => ({
  type: MOBILE_SIDEBAR_TOGGLE,
});

export default (state = false, action) => {
  switch (action.type) {
    case MOBILE_SIDEBAR_TOGGLE:
      return !state;
    default:
      return state;
  }
};

export const getIsMobileSidebarShown = state => state.ui.mobileSidebarShow;
