import menu from './menu.actionTypes';

const INITIAL_STATE = {
  isMenuHidden: true,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case menu.TOGGLE_MENU:
      return {
        ...state,
        isMenuHidden: !state.isMenuHidden,
      };

    default:
      return state;
  }
};
export default menuReducer;
