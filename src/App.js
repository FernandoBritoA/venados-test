import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CoordinatorLayout from './components/CoordinatorLayout/CoordinatorLayout';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <CoordinatorLayout />
    </div>
  );
};

export default App;
