import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import CoordinatorLayout from '../components/CoordinatorLayout/CoordinatorLayout';
import CompetitionSelector from '../components/CompetitionSelector/CompetitionSelector';
import CopaMxResults from '../components/CopaMxResults/CopaMxResults';
import AscensoMxResults from '../components/AscensoMxResults/AscensoMxResults';
import WithSpinner from '../components/WithSpinner/WithSpinner';

import { connect } from 'react-redux';
import { getGames } from '../redux/games/games.actions';
import { createStructuredSelector } from 'reselect';
import { selectAreGamesLoaded } from '../redux/games/games.selectors';

const CopaMxResultsWithSpinner = WithSpinner(CopaMxResults);
const AscensoMxResultsWithSpinner = WithSpinner(AscensoMxResults);

const HomePage = ({ match: { path }, getGames, areGamesLoaded }) => {
  useEffect(() => {
    if (!areGamesLoaded) {
      getGames();
    }
  }, [getGames, areGamesLoaded]);
  return (
    <div className='home-page'>
      <CoordinatorLayout />
      <CompetitionSelector path={path} />
      <Switch>
        <Route
          path={`${path}/copa-mx`}
          render={(props) => (
            <CopaMxResultsWithSpinner isLoading={!areGamesLoaded} {...props} />
          )}
        />
        <Route
          path={`${path}/ascenso-mx`}
          render={(props) => (
            <AscensoMxResultsWithSpinner
              isLoading={!areGamesLoaded}
              {...props}
            />
          )}
        />
      </Switch>
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
