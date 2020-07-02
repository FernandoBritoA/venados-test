import React from 'react';
import './CompetitionSelector.css';

import { Link } from 'react-router-dom';

const CompetitionSelector = ({ path }) => {
  return (
    <div className='competition-selector'>
      <Link to={`${path}/copa-mx`} className='tab-option'>
        COPA MX
      </Link>
      <Link to={`${path}/ascenso-mx`} className='tab-option'>
        ASCENSO MX
      </Link>
    </div>
  );
};

export default CompetitionSelector;
