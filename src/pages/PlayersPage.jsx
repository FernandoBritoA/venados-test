import React, { useEffect } from 'react';
import WithSpinner from '../components/WithSpinner/WithSpinner';
import PlayersContainer from '../components/PlayersContainer/PlayersContainer';

import { connect } from 'react-redux';
import { getPlayers } from '../redux/players/players.actions';
import { createStructuredSelector } from 'reselect';
import { selectArePlayersLoaded } from '../redux/players/players.selectors';

const PlayersContainerWithSpinner = WithSpinner(PlayersContainer);

const StatsPage = ({ getPlayers, arePlayersLoaded }) => {
  useEffect(() => {
    if (!arePlayersLoaded) {
      getPlayers();
    }
  }, [getPlayers, arePlayersLoaded]);

  return (
    <div className='players-page'>
      <PlayersContainerWithSpinner isLoading={!arePlayersLoaded} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  arePlayersLoaded: selectArePlayersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getPlayers: () => dispatch(getPlayers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsPage);
