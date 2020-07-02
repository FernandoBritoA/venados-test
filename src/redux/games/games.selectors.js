import { createSelector } from 'reselect';

const selectGames = (state) => state.games;

export const selectCopaMX = createSelector([selectGames], (games) =>
  games.array ? games.array.filter((game) => game.league === 'Copa MX') : null
);

export const selectAscensoMX = createSelector([selectGames], (games) =>
  games.array
    ? games.array.filter((game) => game.league === 'Ascenso MX')
    : null
);
