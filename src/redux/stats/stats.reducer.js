import statsAT from './stats.actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  array: null,
};

const statsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case statsAT.GET_STATS_START:
      return {
        ...state,
        isLoading: true,
      };
    case statsAT.GET_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        array: payload,
      };
    case statsAT.GET_STATS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default statsReducer;
