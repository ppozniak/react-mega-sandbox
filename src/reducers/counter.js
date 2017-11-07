import {
  INCREMENT_BY
} from '../const/ActionTypes';

const initialState = 0;

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BY:
      return state + action.number;
    default:
      return state;
  }
}

export default counter;