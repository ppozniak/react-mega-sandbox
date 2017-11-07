import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';
import counter from './counter';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  counter,
  visibilityFilter
});

export const getVisibleTodos = (state) => fromTodos.getVisibleTodos(state.todos, state.visibilityFilter);