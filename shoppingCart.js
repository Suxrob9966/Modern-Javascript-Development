// Exporting module
console.log('Exporting module');

// Variables are scoped to the current module
export const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};

// console.log(cart);

const totalPrice = 230;
const totalQuantity = 12;

export {totalPrice, totalQuantity as tq}; // named exports

export default function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};