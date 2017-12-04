import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER,
  SHOW_ALL,
} from './constants';
import { combineReducers } from 'redux';

import todo from './reducers/todo';

const currentIdInitalState = 3;
const currentId = (state = currentIdInitalState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return state + 1;
    default:
      return state;
  }
}

const allTodosInitialState = [0, 1, 2];
const allTodos = (state = allTodosInitialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.id];
    default:
      return state;
  }
}

const todosByIdInitialState = {
  0: {
    id: 0,
    name: 'Eat chicken',
    description: 'Chickens are tasty : D',
    done: true
  },
  1: {
    id: 1,
    name: 'Wash your hands',
    done: false
  },
  2: {
    id: 2,
    name: 'WOLOLOLOOO',
    description: 'WOWLOWLWOWLWOLOOO',
    done: false
  },
};
const todosById = (state = todosByIdInitialState, action) => {
  const { type, id } = action;
  switch (type) {
    case ADD_TODO:
    case TOGGLE_TODO:
      return {
        ...state,
        [id]: todo(state[id], action)
      }
    default:
      return state;
  }
}

// Visibility filter
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({
  currentId,
  allTodos,
  todosById,
  visibilityFilter
});

