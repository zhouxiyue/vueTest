export const getTotalPrice = (foods) => {
  return foods.reduce((prev, food) => prev + food.price * food.count, 0);
}
