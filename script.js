// Importing module
// import {addToCart, totalPrice as price, tq} from './shoppingCart.js'; // to cahnge the name of the variable put as and the new var name
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

/*
import * as ShoppingCart from './shoppingCart.js'; // import everything ib object
ShoppingCart.addToCart('orange', 7);

console.log(ShoppingCart.shippingCost);
*/

// import add, {addToCart, totalPrice as price, tq} from './shoppingCart.js'; // mixed imports (default and named), this is not desirable
import add, {cart} from './shoppingCart.js';
add('pizza', 3);
add('apple', 6);
add('pear', 2);

console.log(cart);