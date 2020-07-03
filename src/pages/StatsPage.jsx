import React, { useEffect } from 'react';
import WithSpinner from '../components/WithSpinner/WithSpinner';
import StatsTable from '../components/StatsTable/StatsTable';

import { connect } from 'react-redux';
import { getStats } from '../redux/stats/stats.actions';
import { createStructuredSelector } from 'reselect';
import { selectAreStatsLoaded } from '../redux/stats/stats.selectors';

const StatsTableWithSpinner = WithSpinner(StatsTable);

const StatsPage = ({ getStats, areStatsLoaded }) => {
  useEffect(() => {
    if (!areStatsLoaded) {
      getStats();
    }
  }, [getStats, areStatsLoaded]);

  return (
    <div className='stats-page' style={{ marginTop: '3.5rem' }}>
      <StatsTableWithSpinner isLoading={!areStatsLoaded} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  areStatsLoaded: selectAreStatsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getStats: () => dispatch(getStats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsPage);
