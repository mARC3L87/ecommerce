import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  COUNT_TOTAL,
  PICK_SIZE,
  INCREMENT,
  DECREMENT,
  ON_COUNT,
  ORDER_CART,
} from './types';

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

export const increment = (id) => (dispatch) => {
  dispatch({
    type: INCREMENT,
    payload: id,
  });
};

export const decrement = (id) => (dispatch) => {
  dispatch({
    type: DECREMENT,
    payload: id,
  });
};

export const onCount = (id, value) => (dispatch) => {
  dispatch({
    type: ON_COUNT,
    payload: { id, value },
  });
};

export const orderCart = (form) => (dispatch) => {
  dispatch({
    type: ORDER_CART,
    payload: form,
  });
};
