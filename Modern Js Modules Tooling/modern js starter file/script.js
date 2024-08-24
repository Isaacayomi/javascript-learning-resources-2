/*
// Importing module
// import {
//   addToCart,
//   totalQuantity,
//   totalPrice,
//   nameNAge,
// } from './shoppingCart.js';
// addToCart('bread', 5);
// nameNAge('Joke', 23);

// console.log(totalPrice, totalQuantity);
// console.log(addToCart('Beans', 10))
console.log('Importing module');

// importing all the export of a module at the same time
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
ShoppingCart.nameNAge('Prime', 50);

// import default export
import add from './shoppingCart.js'
add('Pizza', 2)

*/

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(cart);
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(cart);
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return { addToCart, orderStock, cart, totalPrice, totalQuantity };
})();
ShoppingCart2.addToCart('biscuit', 4);
ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.orderStock('pizza', 2);
