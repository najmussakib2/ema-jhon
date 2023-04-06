import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../reviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedcart = useLoaderData();
    const [cart,setCart] = useState(savedcart);

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cart} />
            </div>
            
        </div>
    );
};

export default Orders;