import { combineReducers } from 'redux';
import menu from './menu/menu.reducer';
import games from './games/games.reducer';

const rootReducer = combineReducers({ menu, games });

export default rootReducer;
