export const getTotalPrice = (foods) => {
  return foods.reduce((prev, food) => prev + food.price * food.count, 0);
};

export const test1 = (foods) => {
  return 'test1';
};

export const test2 = (foods) => {
  return 'test2';
};
