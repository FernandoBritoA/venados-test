import React from 'react';
import './CompetitionSelector.css';

const CompetitionSelector = ({ changeCompetition, competition }) => {
  return (
    <div className='competition-selector'>
      <button
        className={`tab-option ${competition === 'copaMx' ? 'active' : ''}`}
        onClick={() => changeCompetition('copaMx')}
      >
        COPA MX
      </button>
      <button
        className={`tab-option ${competition === 'ascensoMx' ? 'active' : ''}`}
        onClick={() => changeCompetition('ascensoMx')}
      >
        ASCENSO MX
      </button>
    </div>
  );
};

export default CompetitionSelector;
