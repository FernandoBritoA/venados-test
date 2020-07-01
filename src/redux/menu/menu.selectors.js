import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

//MENU
export const selectIsMenuHidden = createSelector(
  [selectMenu],
  (menu) => menu.isMenuHidden
);
