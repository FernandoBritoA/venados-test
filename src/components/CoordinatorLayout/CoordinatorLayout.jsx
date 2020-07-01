import React from 'react';
import './CoordinatorLayout.css';
import logo from '../../assets/venados-logo.png';

const CoordinatorLayout = () => {
  return (
    <div className='coordinator-layout'>
      <img src={logo} alt='venados' className='logo-image' />
    </div>
  );
};

export default CoordinatorLayout;
