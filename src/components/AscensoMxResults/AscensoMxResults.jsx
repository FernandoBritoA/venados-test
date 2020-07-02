import React from 'react';

import MonthBlock from '../MonthBlock/MonthBlock';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAscensoMX } from '../../redux/games/games.selectors';

const AscensoMxResults = ({ games }) => {
  const divideGamesByMonth = () => {
    const monthsArray = games.map((games) =>
      new Date(games.datetime).getMonth()
    );
    const newGamesArray = games.map(({ ...data }, i) => ({
      monthIndex: monthsArray[i],
      ...data,
    }));
    const uniqueMonthsArray = monthsArray.filter(
      (month, i) => month !== monthsArray[i - 1]
    );

    const emptyUniqueMonths = Array.from(uniqueMonthsArray, () => []);
    newGamesArray.forEach((game) => {
      emptyUniqueMonths[game.monthIndex].push(game);
    });

    return emptyUniqueMonths;
  };

  return (
    <div>
      {divideGamesByMonth().map((month, i) => (
        <MonthBlock key={i} month={month} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  games: selectAscensoMX,
});

export default connect(mapStateToProps)(AscensoMxResults);
