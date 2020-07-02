import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CoordinatorLayout from '../components/CoordinatorLayout/CoordinatorLayout';
import CompetitionSelector from '../components/CompetitionSelector/CompetitionSelector';
import CopaMxResults from '../components/CopaMxResults/CopaMxResults';

const HomePage = ({ match: { path } }) => {
  return (
    <div className='home-page'>
      <CoordinatorLayout />
      <CompetitionSelector path={path} />
      <Switch>
        <Route path={`${path}/copa-mx`} component={CopaMxResults} />
      </Switch>
    </div>
  );
};

export default HomePage;
