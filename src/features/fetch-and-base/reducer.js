export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const IMAGE_ERROR = 'IMAGE_ERROR';

export const receiveImage = base64 => ({
  type: RECEIVE_IMAGE,
  base64,
  receivedAt: new Date().toLocaleDateString(),
  error: null,
});
export const requestImage = url => ({ type: REQUEST_IMAGE, url });
export const imageError = error => ({ type: IMAGE_ERROR, error, base64: null });

const toDataURL = url =>
  fetch(url)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        return Promise.reject(response.status);
      }
      return response;
    })
    .then(response => response.blob())
    .then(
      blob =>
        new Promise((resolve, reject) => {
          if (!blob.type.includes('image')) reject(new Error('This is not an image'));
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

export const fetchImage = url =>
  function(dispatch) {
    dispatch(requestImage(url));

    return toDataURL(url)
      .then(dataUrl => dispatch(receiveImage(dataUrl)))
      .catch(error => dispatch(imageError(error)));
  };

const initialState = {
  fetching: false,
  base64: null,
  error: false,
};

const image = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, fetching: true };
    case RECEIVE_IMAGE:
      return { ...state, fetching: false, base64: action.base64, receivedAt: action.receivedAt };
    case IMAGE_ERROR:
      return { ...state, fetching: false, error: `There is an error: ${action.error}` };
    default:
      return state;
  }
};

export default image;
