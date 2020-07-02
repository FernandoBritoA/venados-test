import React from 'react';

//import MonthBlock from '../MonthBlock/MonthBlock';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCopaMX } from '../../redux/games/games.selectors';

const CopaMxResults = ({ games }) => {
  return <div></div>;
};

const mapStateToProps = createStructuredSelector({
  games: selectCopaMX,
});

export default connect(mapStateToProps)(CopaMxResults);
