import {
  REQUEST_IMAGE,
  RECEIVE_IMAGE,
  IMAGE_ERROR,
} from './constants';

export const receiveImage = base64 => ({ type: RECEIVE_IMAGE, base64, receivedAt: new Date().toLocaleDateString(), error: null });
export const requestImage = url => ({ type: REQUEST_IMAGE, url });
export const imageError = (error) => ({ type: IMAGE_ERROR, error, base64: null });

const toDataURL = url => fetch(url)
  .then(response => {
    console.log(response);
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    return response;
  })
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    if (!blob.type.includes('image')) reject('This is not an image');
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }));


export const fetchImage = url => {
  return function (dispatch) {
    dispatch(requestImage(url));

    return toDataURL(url)
      .then(dataUrl => dispatch(receiveImage(dataUrl)))
      .catch(error => dispatch(imageError(error)));
  }
}