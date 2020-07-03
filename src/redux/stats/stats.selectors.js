import { createSelector } from 'reselect';

const selectStatsData = (state) => state.stats;

export const selectStats = createSelector([selectStatsData], (stats) =>
  stats.array ? stats.array : null
);

export const selectAreStatsLoaded = createSelector(
  [selectStatsData],
  (stats) => !!stats.array
);
