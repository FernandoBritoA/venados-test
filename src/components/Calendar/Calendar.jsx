import React from 'react';
import './Calendar.css';

const Calendar = ({ date, homeTeam, awayTeam }) => {
  const getDayName = () => {
    const newDate = new Date(date);
    const day = [];
    day[0] = 'DOM';
    day[1] = 'LUN';
    day[2] = 'MAR';
    day[3] = 'MIÉ';
    day[4] = 'JUE';
    day[5] = 'VIE';
    day[6] = 'SÁB';

    return day[newDate.getDay()];
  };
  const getDayNumber = () => {
    const newDate = new Date(date);
    return newDate.getDate();
  };

  // @ts-ignore
  const gapi = window.gapi;
  const CLIENT_ID =
    '765665826109-7ago8t1pcd9ne4v57mel3t21b59mh3f8.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyCGSkFXjDHZjx4UGyfjXIFvdXVPYERlN-8';
  const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ];
  const SCOPES = 'https://www.googleapis.com/auth/calendar.events';
  const handleClick = () => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
      gapi.client.load('calendar', 'v3');
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = {
            summary: `${homeTeam} vs ${awayTeam}`,
            start: {
              dateTime: date,
              timeZone: 'America/Los_Angeles',
            },
            end: {
              dateTime: date,
              timeZone: 'America/Los_Angeles',
            },
            reminders: {
              useDefault: false,
              overrides: [
                { method: 'email', minutes: 24 * 60 },
                { method: 'popup', minutes: 10 },
              ],
            },
          };

          const request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
          });
          request.execute((event) => {
            window.open(event.htmlLink);
          });
        });
    });
  };

  return (
    <div className='calendar'>
      <i
        className='fa fa-calendar fa-3x calendar-ico'
        aria-hidden='true'
        onClick={() => handleClick()}
      />
      <span className='day-number'>{getDayNumber()}</span>
      <p className='day-name'>{getDayName()}</p>
    </div>
  );
};

export default Calendar;
