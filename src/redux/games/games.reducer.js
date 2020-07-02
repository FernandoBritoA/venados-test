import gamesAT from './games.actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  array: null,
};

const gamesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case gamesAT.GET_GAMES_START:
      return {
        ...state,
        isLoading: true,
      };
    case gamesAT.GET_GAMES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        array: payload,
      };
    case gamesAT.GET_GAMES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default gamesReducer;
