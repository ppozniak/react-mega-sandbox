import {
  REQUEST_IMAGE,
  RECEIVE_IMAGE,
  IMAGE_ERROR
} from '../const/ActionTypes';

const initialState = {
  fetching: false,
  image: null,
  error: false
};

const image = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, fetching: true };
    case RECEIVE_IMAGE:
      return { ...state, fetching: false, data: action.img, receivedAt: action.receivedAt };
    case IMAGE_ERROR:
      return { ...state, fetching: false, error: `There is an error: ${action.error}` }
    default:
      return state;
  }
}

export default image;
