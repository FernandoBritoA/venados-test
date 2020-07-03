import { combineReducers } from 'redux';
import menu from './menu/menu.reducer';
import games from './games/games.reducer';
import stats from './stats/stats.reducer';
import players from './players/players.reducer';

const rootReducer = combineReducers({ menu, games, stats, players });

export default rootReducer;
