import { createSelector } from 'reselect';

const selectPlayersData = (state) => state.players;

export const selectPlayers = createSelector([selectPlayersData], (players) =>
  players.obj ? players.obj : null
);

export const selectArePlayersLoaded = createSelector(
  [selectPlayersData],
  (players) => !!players.obj
);
