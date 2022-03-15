export const parsePrice = (price) => {
  if (price.length === 0) {
    return;
  }
  return price.toFixed(2);
};

export const countPrice = (price, qty) => {
  return price * qty;
};
