import { LOG_IN } from './constants';
const initialState = null;

const username = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      return state = action.username
    default:
      return state;
  }
}

export default username;