import { createAction, handleAction } from 'redux-actions';

export const mobileSidebarToggle = createAction('MOBILE_SIDEBAR_TOGGLE');

const initialState = false;

export default handleAction(
  mobileSidebarToggle,
  state => !state,
  initialState,
);

export const getIsMobileSidebarShown = state => state.ui.mobileSidebarShow;
