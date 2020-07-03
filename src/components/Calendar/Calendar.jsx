import React from 'react';
import './Calendar.css';

const Calendar = ({ date }) => {
  const getDayName = () => {
    const newDate = new Date(date);
    const day = [];
    day[0] = 'LUN';
    day[1] = 'MAR';
    day[2] = 'MIÉ';
    day[3] = 'JUE';
    day[4] = 'VIE';
    day[5] = 'SÁB';
    day[6] = 'DOM';

    return day[newDate.getDay()];
  };
  const getDayNumber = () => {
    const newDate = new Date(date);
    return newDate.getDate();
  };
  return (
    <div className='calendar'>
      <i className='fa fa-calendar fa-3x calendar-ico' aria-hidden='true' />
      <span className='day-number'>{getDayNumber()}</span>
      <p className='day-name'>{getDayName()}</p>
    </div>
  );
};

export default Calendar;
