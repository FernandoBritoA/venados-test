import React, { Fragment } from 'react';
import './MenuItem.css';

import { Link, withRouter } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleMenu } from '../../redux/menu/menu.actions';

const MenuItem = ({ label, route, toggleMenu, location: { pathname } }) => {
  const active = pathname.includes(route);
  return (
    <Fragment>
      <Link
        to={route}
        className={`menu-item ${active ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <h2>{label}</h2>
      </Link>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default compose(withRouter, connect(null, mapDispatchToProps))(MenuItem);
