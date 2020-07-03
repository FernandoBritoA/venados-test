import statsAT from './stats.actionTypes';
import axios from 'axios';

const getStatsStart = () => ({
  type: statsAT.GET_STATS_START,
});

const getStatsSuccess = (stats) => {
  return {
    type: statsAT.GET_STATS_SUCCESS,
    payload: stats,
  };
};

const getStatsFailure = () => ({
  type: statsAT.GET_STATS_FAILURE,
});

export const getStats = () => async (dispatch) => {
  dispatch(getStatsStart());
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://venados.dacodes.mx/api/statistics`,
      config
    );
    const stats = response.data.data.statistics;

    dispatch(getStatsSuccess(stats));
  } catch (error) {
    dispatch(getStatsFailure());
  }
};
