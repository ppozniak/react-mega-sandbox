import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const logger = createLogger();

export const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(
    thunkMiddleware,
    logger
  ));
  return store;
};