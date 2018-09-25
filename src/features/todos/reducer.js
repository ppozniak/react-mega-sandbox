import { combineReducers } from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_DONE = 'SHOW_DONE';
export const SHOW_UNDONE = 'SHOW_UNDONE';

const getTodo = (state, id) => state.todosById[id];
const getAllTodos = state => state.allTodos.map(todoId => getTodo(state, todoId));

export const getVisibleTodos = ({ todos }) => {
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
};

const todo = (state, action) => {
  console.log(state, action);
  const { name, description, id } = action;
  switch (action.type) {
    case ADD_TODO:
      return {
        id,
        name,
        description,
        done: false,
      };
    case TOGGLE_TODO:
      return id !== state.id
        ? state
        : {
            ...state,
            done: !state.done,
          };
    default:
      return state;
  }
};

export const addTodo = (name, description, id) => ({ type: ADD_TODO, name, description, id });
export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });

const currentIdInitalState = 3;
const currentId = (state = currentIdInitalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state + 1;
    default:
      return state;
  }
};

const allTodosInitialState = [0, 1, 2];
const allTodos = (state = allTodosInitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.id];
    default:
      return state;
  }
};

const todosByIdInitialState = {
  0: {
    id: 0,
    name: 'Eat chicken',
    description: 'Chickens are tasty : D',
    done: true,
  },
  1: {
    id: 1,
    name: 'Wash your hands',
    done: false,
  },
  2: {
    id: 2,
    name: 'WOLOLOLOOO',
    description: 'WOWLOWLWOWLWOLOOO',
    done: false,
  },
};
const todosById = (state = todosByIdInitialState, action) => {
  const { type, id } = action;
  switch (type) {
    case ADD_TODO:
    case TOGGLE_TODO:
      return {
        ...state,
        [id]: todo(state[id], action),
      };
    default:
      return state;
  }
};

// Visibility filter
export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  currentId,
  allTodos,
  todosById,
  visibilityFilter,
});
