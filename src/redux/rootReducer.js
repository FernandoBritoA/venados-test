import { combineReducers } from 'redux';
import menu from './menu/menu.reducer';
import games from './games/games.reducer';
import stats from './stats/stats.reducer';

const rootReducer = combineReducers({ menu, games, stats });

export default rootReducer;
