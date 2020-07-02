import React from 'react';
import './CompetitionSelector.css';

const CompetitionSelector = ({ changeCompetition }) => {
  return (
    <div className='competition-selector'>
      <button
        className='tab-option'
        onClick={() => changeCompetition('copaMx')}
      >
        COPA MX
      </button>
      <button
        className='tab-option'
        onClick={() => changeCompetition('ascensoMx')}
      >
        ASCENSO MX
      </button>
    </div>
  );
};

export default CompetitionSelector;
