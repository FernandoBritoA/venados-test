import React, { Fragment } from 'react';
import './Navbar.css';
import Menu from '../Menu/Menu';

import { connect } from 'react-redux';
import { toggleMenu } from '../../redux/menu/menu.actions';

const Navbar = ({ toggleMenu, location }) => {
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/home':
        return 'Home';
      case '/estadisticas':
        return 'Estadísticas';
      case '/jugadores':
        return 'Jugadores';

      default:
        break;
    }
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

export default connect(null, mapDispatchToProps)(Navbar);
