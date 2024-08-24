// Exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(cart);
  console.log(`${quantity} ${product} added to cart`);
};

export const nameNAge = function (name, age) {
  console.log(`Name is ${name}, and you are ${age} years old`);
};

const totalPrice = 231;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
