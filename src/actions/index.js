import {
  ADD_TODO,
  TOGGLE_TODO,
  INCREMENT_BY,
  CHANGE_FILTER,
  REQUEST_IMAGE,
  RECEIVE_IMAGE,
  IMAGE_ERROR
} from '../const/ActionTypes';

export const addTodo = text => ({ type: ADD_TODO, text });
export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
export const incrementBy = number => ({ type: INCREMENT_BY, number });
export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });

export const receiveImage = img => ({ type: RECEIVE_IMAGE, img, receivedAt: new Date().toLocaleDateString() });
export const requestImage = url => ({ type: REQUEST_IMAGE, url });
export const imageError = (error) => ({ type: IMAGE_ERROR, error });

const toDataURL = url => fetch(url)
  .then( response => {
    console.log(response);
    if ( !response.ok ) {
      return Promise.reject(response.status);
    }
    return response;
  } )
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    if ( !blob.type.includes('image') ) reject('This is not an image');
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }));


export const fetchImage = url => {
  return function(dispatch) {
    dispatch( requestImage(url) );

    return toDataURL(url)
          .then( dataUrl => dispatch( receiveImage(dataUrl) ) )
          .catch( error => dispatch( imageError(error) ) );
  }
}

