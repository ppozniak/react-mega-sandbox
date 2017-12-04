import {
  ADD_TODO,
  TOGGLE_TODO
} from '../constants';

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
      }
    case TOGGLE_TODO:
      return id !== state.id ? state : {
        ...state,
        done: !state.done
      }
    default:
      return state;
  }
}

export default todo;