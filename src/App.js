import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import BackMenu from './components/BackMenu/BackMenu';
import CoordinatorLayout from './components/CoordinatorLayout/CoordinatorLayout';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import PlayersPage from './pages/PlayersPage';

const App = ({ toggleMenu, isMenuHidden }) => {
  return (
    <div className='App'>
      <Navbar />
      <BackMenu />
      <CoordinatorLayout />
      <div id='app-body' className='app-body'>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' component={HomePage} />
          <Route path='/estadisticas' component={StatsPage} />
          <Route path='/jugadores' component={PlayersPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
