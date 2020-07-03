import playersAT from './players.actionTypes';
import axios from 'axios';

const getPlayersStart = () => ({
  type: playersAT.GET_PLAYERS_START,
});

const getPlayersSuccess = (players) => {
  return {
    type: playersAT.GET_PLAYERS_SUCCESS,
    payload: players,
  };
};

const getPlayersFailure = () => ({
  type: playersAT.GET_PLAYERS_FAILURE,
});

export const getPlayers = () => async (dispatch) => {
  dispatch(getPlayersStart());
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://venados.dacodes.mx/api/players`,
      config
    );
    const players = response.data.data.team;
    dispatch(getPlayersSuccess(players));
  } catch (error) {
    dispatch(getPlayersFailure());
  }
};
