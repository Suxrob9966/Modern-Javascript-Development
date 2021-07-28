/*******
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

/*****
// import add, {addToCart, totalPrice as price, tq} from './shoppingCart.js'; // mixed imports (default and named), this is not desirable
import add, {cart} from './shoppingCart.js';
add('pizza', 3);
add('apple', 6);
add('pear', 2);

console.log(cart);
*****/

/*******
const ShoppingCart2 = (function (){ // with IFI function we create new scope and retur data just once. it is called only once, when it is created
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 232;
    const totalQuantity = 56;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
    };

    const orderStock = function(product, quantity){
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    // we need to return variables in an object and make them public API if we want to use them outside of IFE
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})();

ShoppingCart2.addToCart('apple', 75);
ShoppingCart2.addToCart('grape', 25);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //this is private so can't access
********/

/*****
// Common JS modules
// Export
export.addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
};

// Import
const { addToCart } = require('./shoppingCart.js'); 
*******/


import  cloneDeep  from "./node_modules/lodash-es/cloneDeep.js";

const state = {
    cart: [
        {product: 'bread', quantity: 3},
        {product: 'apple', quantity: 10},
    ],
    user: {
        loggedIn: true,
    },
};

const stateClone = Object.assign({}, state); // copying state obj to stateClone obj
// console.log(stateClone);

// deep copy with lodash clone() function
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);