import React from 'react';
import './Menu.css';
import logo from '../../assets/venados-logo.png';
import MenuItem from '../MenuItem/MenuItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsMenuHidden } from '../../redux/menu/menu.selectors';

const Menu = ({ isMenuHidden }) => {
  return (
    <div className={`menu ${isMenuHidden ? '' : 'show'}`}>
      <div className='header'>
        <img src={logo} alt='venados' className='menu-logo' />
      </div>
      <MenuItem label={'Home'} route={'/home'} />
      <MenuItem label={'Estadísticas'} route={'/estadisticas'} />
      <MenuItem label={'Jugadores'} route={'/jugadores'} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isMenuHidden: selectIsMenuHidden,
});

export default connect(mapStateToProps)(Menu);
