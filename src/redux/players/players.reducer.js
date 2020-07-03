import playersAT from './players.actionTypes';

const INITIAL_STATE = {
  obj: null,
  isLoading: false,
};

const playersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case playersAT.GET_PLAYERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case playersAT.GET_PLAYERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        obj: payload,
      };
    case playersAT.GET_PLAYERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default playersReducer;
