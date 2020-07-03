import React from 'react';
import './BackMenu.css';
import { connect } from 'react-redux';
import { toggleMenu } from '../../redux/menu/menu.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsMenuHidden } from '../../redux/menu/menu.selectors';

const BackMenu = ({ toggleMenu, isMenuHidden }) => {
  return (
    <div
      className={`back-menu ${isMenuHidden ? '' : 'show-back-menu'}`}
      onClick={() => toggleMenu()}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isMenuHidden: selectIsMenuHidden,
});
const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackMenu);
