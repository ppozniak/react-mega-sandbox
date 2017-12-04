import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER,
} from './constants';

export const addTodo = (name, description, id) => ({ type: ADD_TODO, name, description, id });
export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });

