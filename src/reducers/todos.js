import {
  ADD_TODO,
  TOGGLE_TODO
} from '../const/ActionTypes';
import * as filterTypes from './visibilityFilter';

const initialState = [
{
  id: 9000,
  text: "test",
  done: true,
},
{
  id: 9001,
  text: "test111",
  done: false,
},
{
  id: 9002,
  text: "tagasdgsagdsagdas",
  done: false,
},
];
let todosCounter = 0;

const todos = (state = initialState, action) => {
  const { type, text, id } = action;
  switch(type) {
    case ADD_TODO:
      return [...state, { text, done: false, id: todosCounter++ }]
    case TOGGLE_TODO:
      return state.map( todo => todo.id === id ? { ...todo, done: !todo.done } : todo )
    default:
      return state;
  }
}

export default todos;

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filterTypes.SHOW_ALL:
      return todos;
    case filterTypes.SHOW_DONE:
      return todos.filter(todo => todo.done);
    case filterTypes.SHOW_UNDONE:
      return todos.filter(todo => !todo.done);
    default:
      return todos
  }
}
