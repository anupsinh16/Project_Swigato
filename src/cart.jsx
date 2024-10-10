import React from 'react';
import { useState,useContext,createContext } from 'react';
import { Cart } from './foods';




function Cartt() {
  const cartitem = useContext(foodinfo); 
  
  return (

    <>
    <Cart/>
    
    </>
    // <div>
    //   <h1>My Cart</h1>

    //   {cartitem.length === 0 ? (
    //     <p>Your cart is empty!</p>
    //   ) : (
    //     cartitem.map((foodit) => (
    //       <div key={foodit.id}>
    //         <p>
    //           {foodit.name} - Rs.{foodit.price}
    //           <button className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={() => Removefromcart(foodit.id)}>
    //             Remove
    //           </button>
    //         </p>
    //       </div>
    //     ))
    //   )}
    // </div>
  );
}

export default Cartt;
