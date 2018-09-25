import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle';
import reducer from './rootReducer';
import { loadState, saveState } from './localStorage';

const logger = createLogger();

export const configureStore = () => {
  const preloadedState = loadState();

  const store = createStore(reducer, preloadedState, applyMiddleware(thunkMiddleware, logger));

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );

  return store;
};
