import { ADD_TO_CART, REMOVE_FROM_CART, COUNT_TOTAL, PICK_SIZE } from './types';

export const addToCart = (id) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: id,
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
};

export const countTotal = () => (dispatch) => {
  dispatch({
    type: COUNT_TOTAL,
  });
};

export const pickSize = (id, size) => (dispatch) => {
  dispatch({
    type: PICK_SIZE,
    payload: { id, size },
  });
};
