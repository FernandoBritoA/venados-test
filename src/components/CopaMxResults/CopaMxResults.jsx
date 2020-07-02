import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCopaMX } from '../../redux/games/games.selectors';

const CopaMxResults = ({ games }) => {
  console.log(games);
  return <div>Copa</div>;
};

const mapStateToProps = createStructuredSelector({
  games: selectCopaMX,
});

export default connect(mapStateToProps)(CopaMxResults);
