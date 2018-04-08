import { ADD_CART } from '../actions/cart';

// cart state store in format like this
// outer key is product id
// {
//  1: { quantity: 5 },
//  5: { quantity: 1 }
// }

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        [action.id]: {
          quantity: state[action.id] ? state[action.id].quantity + 1 : 1
        }
      };
    default:
      return state;
  }
}
