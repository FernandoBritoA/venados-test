import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import CoordinatorLayout from '../components/CoordinatorLayout/CoordinatorLayout';
import CompetitionSelector from '../components/CompetitionSelector/CompetitionSelector';
import CopaMxResults from '../components/CopaMxResults/CopaMxResults';
import AscensoMxResults from '../components/AscensoMxResults/AscensoMxResults';

import { connect } from 'react-redux';
import { getGames } from '../redux/games/games.actions';

const HomePage = ({ match: { path }, getGames }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);
  return (
    <div className='home-page'>
      <CoordinatorLayout />
      <CompetitionSelector path={path} />
      <Switch>
        <Route path={`${path}/copa-mx`} component={CopaMxResults} />
        <Route path={`${path}/ascenso-mx`} component={AscensoMxResults} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getGames: () => dispatch(getGames()),
});

export default connect(null, mapDispatchToProps)(HomePage);
