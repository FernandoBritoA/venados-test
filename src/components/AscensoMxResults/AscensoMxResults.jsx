import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAscensoMX } from '../../redux/games/games.selectors';

const AscensoMxResults = ({ games }) => {
  console.log(games);

  return <div>Ascenso</div>;
};

const mapStateToProps = createStructuredSelector({
  games: selectAscensoMX,
});

export default connect(mapStateToProps)(AscensoMxResults);
