import initialState from './initialState';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
