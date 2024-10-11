import React from 'react';
import { useState,useContext,createContext } from 'react';

import { foodinfo } from './Routingapp';





function Cartt() {

  const { cartitem ,setcartitem } = useContext(foodinfo);
  console.log("Cart items in Cartt component:", cartitem);

  const Removefromcart = (id) => {
    const remitem = cartitem.filter(foodit => foodit.id !== id);
    setcartitem(remitem);
    localStorage.setItem('cart', JSON.stringify(remitem));
  };

  

  if (!Array.isArray(cartitem)) {
    console.error("cartitem is not an array:", cartitem);
    return <p>Error: cartitem is not an array</p>;
  }
  return (

    <>
    
    
    <div>
      <h1>My Cart</h1>
      {cartitem.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartitem.map((foodit) => (
          <div key={foodit.id}>
            <p>
              {foodit.name} - Rs.{foodit.price}
              
              <button className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={() => Removefromcart(foodit.id)}>
                Remove
              </button>
            </p>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default Cartt;
