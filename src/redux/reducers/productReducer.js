import initialState from './initialState';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

initialState.cart = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: Array.from(
          new Set([
            ...state.cart,
            ...state.items.filter((item) => item.id === action.payload),
          ])
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
