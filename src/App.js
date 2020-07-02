import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/' component={Navbar} />
        <Route exact path='/home' component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
