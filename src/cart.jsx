import React from 'react';
import { useState,useContext,createContext } from 'react';
import './App.css'
import { foodinfo } from './Routingapp';





function Cartt() {

  const { cartitem ,setcartitem } = useContext(foodinfo);
  console.log("Cart items in Cartt component:", cartitem);

  const Removefromcart = (id) => {
    const remitem = cartitem.filter(foodit => foodit.id !== id);
    setcartitem(remitem);
    localStorage.setItem('cart', JSON.stringify(remitem));
  };

  const placeorder =() =>{
    if(cartitem.length==0){
      alert("OOPS....Your Cart is Empty !");

    }
    else{
      alert("Order Placed Successfully...");
      setcartitem([]);
    }
    
  }
  

  // if (!Array.isArray(cartitem)) {
  //   console.error("cartitem is not an array:", cartitem);
  //   return <p>Error: cartitem is not an array</p>;
  // }
  return (

    <>
    
    
    <div id='mycart'>
      <h1>My Cart</h1>
      {cartitem.length === 0 ? (
        <>
        <p>Your cart is empty!</p>
        <img src='/images/empty-cart.webp'></img>
        </>
      ) : (
        cartitem.map((foodit) => (
          <div key={foodit.id}>
            <div id='cartitem'>
              {foodit.name} - Rs.{foodit.price}
              
              <button className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={() => Removefromcart(foodit.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div>
        <button className='btn btn-success' onClick={placeorder}>Place Order</button>
      </div>
    </div>

    </>
  );
}

export default Cartt;
