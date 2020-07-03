import React from 'react';
import './PlayerPreview.css';

const PlayerPreview = ({ player }) => {
  const { name, first_surname, position, image, role } = player;

  return (
    <div className='player-preview'>
      <div className='player-image-container'>
        <img src={image} alt='' className='player-image' />
      </div>

      <p className='player-position'>{position ? position : role}</p>
      <p className='player-name'>{`${name} ${first_surname}`}</p>
    </div>
  );
};

export default PlayerPreview;
