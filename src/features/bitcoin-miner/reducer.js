export const MINE = 'MINE';
export const mineBitcoins = () => ({ type: MINE });

const initialState = {
  amount: 0,
  perMine: 1,
};

const bitcoins = (state = initialState, action) => {
  switch (action.type) {
    case MINE:
      return {
        ...state,
        amount: state.amount + state.perMine,
      };
    default:
      return state;
  }
};

export default bitcoins;
