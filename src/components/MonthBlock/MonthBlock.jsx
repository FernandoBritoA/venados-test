import React from 'react';
import './MonthBlock.css';
import ResultDisplay from '../ResultDisplay/ResultDisplay';

const MonthBlock = ({ month }) => {
  const { monthIndex } = month[0];

  const getMonthInSpanish = () => {
    const month = [];
    month[0] = 'Enero';
    month[1] = 'Febrero';
    month[2] = 'Marzo';
    month[3] = 'Abril';
    month[4] = 'Mayo';
    month[5] = 'Junio';
    month[6] = 'Julio';
    month[7] = 'Agosto';
    month[8] = 'Septiembre';
    month[9] = 'Octubre';
    month[10] = 'Noviembre';
    month[11] = 'Diciembre';

    return month[monthIndex];
  };
  return (
    <div className='month-block'>
      <div className='month-header'>{getMonthInSpanish()}</div>
      {month.map((results, i) => (
        <ResultDisplay results={results} key={i} />
      ))}
    </div>
  );
};

export default MonthBlock;
