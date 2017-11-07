import {
  CHANGE_FILTER
} from '../const/ActionTypes';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_DONE = 'SHOW_DONE';
export const SHOW_UNDONE = 'SHOW_UNDONE';

const visibiityFilter = (state = SHOW_ALL, action) => {
  switch(action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibiityFilter;