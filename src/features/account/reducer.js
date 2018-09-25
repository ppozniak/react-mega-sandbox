export const LOG_IN = 'account/log-in';
export const LOG_OUT = 'account/log-out';

export const logIn = username => ({ type: LOG_IN, payload: username });
export const logOut = () => ({ type: LOG_OUT });

const initialState = null;

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default accountReducer;
