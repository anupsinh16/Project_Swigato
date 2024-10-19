import React, { useEffect } from 'react';
import { useState,useContext,createContext } from 'react';
import './App.css'
import { foodinfo } from './Routingapp';
import DeleteIcon from '@mui/icons-material/Delete';






function Cartt() {

  const { cartitem ,setcartitem,tot,setTot } = useContext(foodinfo);
  console.log("Cart items in Cartt component:", cartitem);

  const Removefromcart = (id) => {
    const remitem = cartitem.filter(foodit => foodit.id !== id);
    setcartitem(remitem);
    localStorage.setItem('cart', JSON.stringify(remitem));
    
  };

  useEffect(()=>{
    const newTotal = cartitem.reduce((acc, item) => acc + item.price, 0);
    setTot(newTotal);  // Update the total state
    localStorage.setItem('total', JSON.stringify(newTotal));
  },[cartitem])

  const placeorder =() =>{
    if(cartitem.length==0){
      alert("OOPS....Your Cart is Empty !");

    }
    else{
      alert("Order Placed Successfully...");
      const remitem = [];
      setcartitem(remitem);
      localStorage.setItem('cart',JSON.stringify(remitem));
     
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
        <>
        <div className="column" id="cards" style={{display:"flex", flexDirection:"column", justifyContent : "center",alignItems:"center"}}>
      {cartitem.map((foodit) => (
        <div class="card" style={{width:"auto",maxWidth:"auto",minWidth:"25rem",height:"auto",margin:"1%"}}>
          <div key={foodit.id}>
            <div id='cartitem' style={{display:"flex",justifyContent:"space-between"}}>
              <div>
              {foodit.name} - Rs.{foodit.price} 
              </div>
              <div>
              | <button className="btn btn-" style={{ marginLeft: '10px' }} onClick={() => Removefromcart(foodit.id)}>
                <DeleteIcon style={{color:"red"}}/>
              </button>
              </div>
            </div>
          </div>
          </div>
          
        ))}
        </div>
        <div>
        <span style={{border:"solid 0px",borderRadius:"5px" ,backgroundColor:"yellow",padding:"0.5%",}}>Your Total Bill : {tot}</span><br/><br/>
        <button className='btn btn-success' onClick={placeorder}>Place Order</button>
      </div>
        </>
        
      )}
      
      <br/><br/>
    </div>

    </>
  );
}

export default Cartt;
