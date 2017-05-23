//step 3 - make root reducer
//must have at least one to use combine, or syntax error
import { combineReducers } from 'redux';
import genres from './genres';
import filters from './filters';
import songs from './songs';

const rootReducer = combineReducers({
  genres,
  filters,
  songs,
});

// trailing comma to know the correct person that last updated the line - using git blame

export default rootReducer
