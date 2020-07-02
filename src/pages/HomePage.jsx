import React, { useEffect, useState } from 'react';

import CoordinatorLayout from '../components/CoordinatorLayout/CoordinatorLayout';
import CompetitionSelector from '../components/CompetitionSelector/CompetitionSelector';
import GamesResults from '../components/GamesResults/GamesResults';
import WithSpinner from '../components/WithSpinner/WithSpinner';

import { connect } from 'react-redux';
import { getGames } from '../redux/games/games.actions';
import { createStructuredSelector } from 'reselect';
import { selectAreGamesLoaded } from '../redux/games/games.selectors';

const GamesResultsWithSpinner = WithSpinner(GamesResults);

const HomePage = ({ match: { path }, getGames, areGamesLoaded }) => {
  const [competition, setCompetition] = useState('copaMx');

  useEffect(() => {
    if (!areGamesLoaded) {
      getGames();
    }
  }, [getGames, areGamesLoaded]);

  const changeCompetition = (competition) => {
    setCompetition(competition);
  };
  return (
    <div className='home-page'>
      <CoordinatorLayout />
      <CompetitionSelector changeCompetition={changeCompetition} />
      <GamesResultsWithSpinner
        isLoading={!areGamesLoaded}
        competition={competition}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  areGamesLoaded: selectAreGamesLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getGames: () => dispatch(getGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
