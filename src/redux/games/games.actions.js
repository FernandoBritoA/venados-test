import gamesAT from './games.actionTypes';
import axios from 'axios';

const getGamesStart = () => ({
  type: gamesAT.GET_GAMES_START,
});

const getGamesSuccess = (games) => {
  return {
    type: gamesAT.GET_GAMES_SUCCESS,
    payload: games,
  };
};

const getGamesFailure = () => ({
  type: gamesAT.GET_GAMES_FAILURE,
});

export const getGames = () => async (dispatch) => {
  dispatch(getGamesStart());
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://venados.dacodes.mx/api/games`,
      config
    );
    const games = response.data.data.games;
    dispatch(getGamesSuccess(games));
  } catch (error) {
    dispatch(getGamesFailure());
  }
};
