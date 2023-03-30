import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/product';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([]);
    const[cart, setCart] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data));
    },[])

    const handleAddToCart = (product) => {
       const newCart = [...cart, product];
       setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                                key={product.id} 
                                product={product}
                                handleAddToCart= {handleAddToCart}></Product>)
                }

            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;