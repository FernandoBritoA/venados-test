import React, { Fragment } from 'react';
import './Navbar.css';
import Menu from '../Menu/Menu';

import { withRouter } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleMenu } from '../../redux/menu/menu.actions';

const Navbar = ({ toggleMenu, location: { pathname } }) => {
  const getPageTitle = () => {
    if (pathname.includes('/home')) return 'Home';
    if (pathname.includes('/estadisticas')) return 'Estadísticas';
    if (pathname.includes('/jugadores')) return 'Jugadores';
  };
  return (
    <Fragment>
      <nav className='navbar'>
        <i
          className='fa fa-bars fa-2x menu-icon'
          aria-hidden='true'
          onClick={toggleMenu}
        />
        <h1 className='page-title'>{getPageTitle()}</h1>
      </nav>
      <Menu />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default compose(withRouter, connect(null, mapDispatchToProps))(Navbar);
