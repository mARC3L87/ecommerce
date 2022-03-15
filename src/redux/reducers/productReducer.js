import initialState from './initialState';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  COUNT_TOTAL,
  PICK_SIZE,
  INCREMENT,
  DECREMENT,
  ON_COUNT,
} from '../actions/types';

initialState.cart = [];
initialState.total = [];
initialState.picked = [];

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
        picked: state.items.filter((item) =>
          item.id !== action.payload ? (item.pickedSize = []) : ''
        ),
      };
    case COUNT_TOTAL:
      return {
        ...state,
        total:
          state.cart
            .map((item) => item.price.current_price * item.qty)
            .reduce((accumulator, current) => {
              return accumulator + current;
            }, 0) + state.shipping,
      };
    case PICK_SIZE:
      return {
        ...state,
        picked: [
          ...state.items,
          ...state.items.map((item) =>
            item.id === action.payload.id
              ? (item.pickedSize = Array.from(
                  new Set([...item.pickedSize, action.payload.size])
                ))
              : ''
          ),
        ],
      };
    case INCREMENT:
      return {
        ...state,
        picked: [
          ...state.items,
          state.items.map((item) =>
            item.id === action.payload ? (item.qty += 1) : ''
          ),
        ],
      };
    case DECREMENT:
      return {
        ...state,
        picked: [
          ...state.items,
          state.items.map((item) =>
            item.id === action.payload ? (item.qty -= 1) : ''
          ),
        ],
      };
    case ON_COUNT:
      return {
        ...state,
        picked: [
          ...state.items,
          state.items.map((item) =>
            item.id === action.payload.id
              ? (item.qty = action.payload.value)
              : ''
          ),
        ],
      };
    default:
      return state;
  }
};
