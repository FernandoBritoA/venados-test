import React, { Fragment, useState } from 'react';
import './PlayersContainer.css';
import PlayerPreview from '../PlayerPreview/PlayerPreview';
import DetailedPlayer from '../DetailedPlayer/DetailedPlayer';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPlayers } from '../../redux/players/players.selectors';

const PlayersContainer = ({ players }) => {
  const { goalkeepers, defenses, centers, forwards, coaches } = players;
  const playersArray = [goalkeepers, defenses, centers, forwards, coaches];

  const [detailedPlayer, setDetailedPlayer] = useState(null);

  const showPlayer = (playerToShow) => {
    setDetailedPlayer(playerToShow);
  };

  return (
    <Fragment>
      {detailedPlayer ? (
        <DetailedPlayer
          detailedPlayer={detailedPlayer}
          showPlayer={showPlayer}
        />
      ) : null}

      <div className='players-container'>
        {playersArray.map((playerGroup) =>
          playerGroup.map((player, i) => (
            <PlayerPreview key={i} player={player} showPlayer={showPlayer} />
          ))
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  players: selectPlayers,
});

export default connect(mapStateToProps)(PlayersContainer);
