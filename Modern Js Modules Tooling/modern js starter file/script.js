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
