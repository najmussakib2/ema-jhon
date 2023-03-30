import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total*7/100;
    const GrandTotal = total+totalShipping+tax;
    
    return (
        <div className='Cart'>
            <h2>Order summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${GrandTotal.toFixed(2)}</h5>

        </div>
    );
};

export default Cart;