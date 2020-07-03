import React from 'react';
import './PlayersContainer.css';
import PlayerPreview from '../PlayerPreview/PlayerPreview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPlayers } from '../../redux/players/players.selectors';

const PlayersContainer = ({ players }) => {
  const { goalkeepers, defenses, centers, forwards, coaches } = players;
  const playersArray = [goalkeepers, defenses, centers, forwards, coaches];

  return (
    <div className='players-container'>
      {playersArray.map((playerGroup) =>
        playerGroup.map((player, i) => (
          <PlayerPreview key={i} player={player} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  players: selectPlayers,
});

export default connect(mapStateToProps)(PlayersContainer);
