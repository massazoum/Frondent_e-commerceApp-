// frontend/pages/cart.js

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartData);
  }, []);

  return (
    <div>
      <Header/>
      <h1>Your Cart</h1>
      <div className="product_list"> 
        {cartItems.map((item, index) => (
<div key={index} className="product-card"> 
<div className="Container_img">
<img src={item.image} alt=""></img>
</div>
 <h2>{item.name}</h2>
 <p>{item.description}</p>
 </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
