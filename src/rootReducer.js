import { combineReducers } from 'redux';
import { todos, visibilityFilter } from './features/todos';
import { image } from './features/fetch-and-base';
import { bitcoins } from './features/bitcoin-miner';

export default combineReducers({
  todos,
  bitcoins,
  visibilityFilter,
  image
});