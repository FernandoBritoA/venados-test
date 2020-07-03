import React, { useState, useEffect } from 'react';
import './ResultDisplay.css';
import Calendar from '../Calendar/Calendar';
import grassBg from '../../assets/grass-texture.jpg';
import local_image from '../../assets/venados-logo.png';

const ResultDisplay = ({ results }) => {
  const {
    datetime,
    away_score,
    home_score,
    opponent,
    opponent_image,
    local,
  } = results;
  const venados = 'Venados F.C.';

  const [homeTeam, setHomeTeam] = useState({ name: '', image: '' });
  const [awayTeam, setAwayTeam] = useState({ name: '', image: '' });
  useEffect(() => {
    if (local) {
      setHomeTeam({ name: venados, image: local_image });
      setAwayTeam({ name: opponent, image: opponent_image });
    } else {
      setHomeTeam({ name: opponent, image: opponent_image });
      setAwayTeam({ name: venados, image: local_image });
    }
  }, [local, opponent, opponent_image]);

  return (
    <div className='result-display'>
      <div className='bg-image-container'>
        <div
          className='bg-image'
          style={{
            backgroundImage: `url(${grassBg})`,
          }}
        />
      </div>
      <div className='calendar-result'>
        <Calendar date={datetime} />
        <div className='result-container'>
          <div className='team-info'>
            <img src={homeTeam.image} alt='' className='team-logo' />
            <p className='team-name'>{homeTeam.name}</p>
          </div>
          <span className='score'>{`${home_score} - ${away_score}`}</span>
          <div className='team-info'>
            <img src={awayTeam.image} alt='' className='team-logo' />
            <p className='team-name'>{awayTeam.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
