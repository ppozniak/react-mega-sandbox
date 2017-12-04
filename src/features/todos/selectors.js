import {
  SHOW_ALL,
  SHOW_DONE,
  SHOW_UNDONE
} from './constants';

const getTodo = (state, id) => state.todosById[id];
const getAllTodos = (state) => state.allTodos.map( todoId => getTodo(state, todoId) );

export const getVisibleTodos = ({todos}) => {
  const allTodos = getAllTodos(todos);
  switch (todos.visibilityFilter) {
    case SHOW_ALL:
      return allTodos;
    case SHOW_DONE:
      return allTodos.filter(todo => todo.done);
    case SHOW_UNDONE:
      return allTodos.filter(todo => !todo.done);
    default:
      return allTodos;
  }
}