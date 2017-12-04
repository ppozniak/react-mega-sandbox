import {
  LOG_IN
} from './constants';

export const logIn = (username) => ({ type: LOG_IN, username });