import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { todos } from './features/todos';
import { image } from './features/fetch-and-base';
import { bitcoins } from './features/bitcoin-miner';
import { username } from './features/account';

export default combineReducers({
  form: formReducer,
  todos,
  bitcoins,
  image,
  username,
});