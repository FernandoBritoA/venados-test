import React, { Fragment } from 'react';
import './DetailedPlayer.css';
import grassBg from '../../assets/grass-texture.jpg';
import Moment from 'react-moment';

const DetailedPlayer = ({ detailedPlayer, showPlayer }) => {
  const {
    name,
    first_surname,
    second_surname,
    image,
    position,
    birthday,
    birth_place,
    weight,
    height,
    last_team,
    role,
  } = detailedPlayer;
  return (
    <Fragment>
      <div className='detailed-player-back' onClick={() => showPlayer(null)} />

      <div className='player-card'>
        <div className='top-card'>
          <div className='bg-img-cont'>
            <img src={grassBg} alt='' className='detailed-player-bg-image' />
          </div>
          <div className='close-btn' onClick={() => showPlayer(null)}>
            x
          </div>
          <h2 className='player-title'>FICHA TÉCNICA</h2>
          <div className='detailed-player-image-container'>
            <img src={image} alt='' className='detailed-player-image' />
          </div>

          <p className='main-player-data'>{`${name} ${first_surname} ${second_surname}`}</p>
          <p className='main-player-data'>{position ? position : role}</p>
        </div>
        <div className='bottom-card'>
          <h2 className='player-category'>FECHA DE NACIMIENTO</h2>
          <span className='player-data'>
            <Moment format='DD/MM/YYYY'>{birthday}</Moment>
          </span>
          <h2 className='player-category'>LUGAR DE NACIMIENTO</h2>
          <span className='player-data'>{birth_place}</span>
          {weight ? (
            <Fragment>
              <h2 className='player-category'>PESO</h2>
              <span className='player-data'>{`${weight}KG`}</span>
              <h2 className='player-category'>ALTURA</h2>
              <span className='player-data'>{`${height}M`}</span>
              <h2 className='player-category'>EQUIPO ANTERIOR</h2>
              <span className='player-data'>{last_team}</span>
            </Fragment>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default DetailedPlayer;
