import React from 'react';
import './Menu.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsMenuHidden } from '../../redux/menu/menu.selectors';

const Menu = ({ isMenuHidden }) => {
  return <div className={`menu ${isMenuHidden ? '' : 'show'}`}></div>;
};

const mapStateToProps = createStructuredSelector({
  isMenuHidden: selectIsMenuHidden,
});

export default connect(mapStateToProps)(Menu);
