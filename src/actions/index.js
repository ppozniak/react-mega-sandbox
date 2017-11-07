import {
  ADD_TODO,
  TOGGLE_TODO,
  INCREMENT_BY,
  CHANGE_FILTER
} from '../const/ActionTypes';

export const addTodo = text => ({ type: ADD_TODO, text });
export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
export const incrementBy = number => ({ type: INCREMENT_BY, number });
export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });