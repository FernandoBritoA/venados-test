import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import PlayersPage from './pages/PlayersPage';

import { connect } from 'react-redux';
import { toggleMenu } from './redux/menu/menu.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsMenuHidden } from './redux/menu/menu.selectors';

const App = ({ toggleMenu, isMenuHidden }) => {
  return (
    <div className='App'>
      <Navbar />
      <div
        className={`back-menu ${isMenuHidden ? '' : 'show-back-menu'}`}
        onClick={() => toggleMenu()}
      />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' component={HomePage} />
        <Route path='/estadisticas' component={StatsPage} />
        <Route path='/jugadores' component={PlayersPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isMenuHidden: selectIsMenuHidden,
});
const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
