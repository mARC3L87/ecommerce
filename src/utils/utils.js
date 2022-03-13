export const parsePrice = (price) => {
  if (price.length === 0) {
    return;
  }
  return price.toFixed(2);
};
