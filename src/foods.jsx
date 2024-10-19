import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext,createContext,useEffect } from 'react'
import { foodinfo } from './Routingapp';
import { NavLink } from 'react-router-dom'


const food = [{
  "_id": {
    "$oid": "653265121011a59bebdb74f1"
  },
  "id": 11,
  "name": " Tea",
  "img": "https://static.toiimg.com/photo/83173328.cms",
  "category": "beverages",
  "price": 30,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74f2"
  },
  "id": 7,
  "name": "Idli/Sambhar",
  "img": "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg",
  "category": "food",
  "price": 180,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74f3"
  },
  "id": 8,
  "name": "Dal Makhni",
  "img": "https://recipes.timesofindia.com/thumb/53097626.cms?width=1200&height=900",
  "category": "food",
  "price": 180,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74f4"
  },
  "id": 9,
  "name": "Cold Coffee",
  "img": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/cold-coffee-recipe-2.jpg",
  "category": "beverages",
  "price": 80,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74f5"
  },
  "id": 10,
  
  "name": "Dosa",
  "img": "https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
  "category": "food",
  "price": 270,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74f6"
  },
  "id": 2,
  "name": " Coke",
  "img": "https://5.imimg.com/data5/SELLER/Default/2021/12/MI/CM/OC/26602448/300-ml-coke-original-500x500.jpg",
  "category": "beverages",
  "price": 55,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74f7"
  },
  "id": 3,
  "name": "Lassi",
  "img": "https://pipingpotcurry.com/wp-content/uploads/2021/05/Lassi-in-a-glass.jpg",
  "category": "beverages",
  "price": 90,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74f8"
  },
  "id": 12,
  "name": "Milk",
  "img": "https://m.media-amazon.com/images/I/61lzZAgOCzL.jpg",
  "category": "beverages",
  "price": 40,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74f9"
  },
  "id": 5,
  "name": "Tandoori Platter",
  "img": "https://images.slurrp.com/prod/recipe_images/better-butter/tandoori-paneer-platter_HX3XOHVHLY0WD9AXFZZG.webp?impolicy=slurrp-20210601&width=1200&height=675",
  "category": "food",
  "price": 295,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74fa"
  },
  "id": 6,
  "name": "Naan",
  "img": "https://static.toiimg.com/thumb/53338316.cms?width=1200&height=900",
  "category": "food",
  "price": 20,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74fb"
  },
  "id": 13,
  "name": "Paneer Butter Masala",
  "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5kecc5mebmjSS-CrZAKaa_RUwoFa5NOuwg&usqp=CAU",
  "category": "food",
  "price": 240,
  "quantity": 0
},{
  "_id": {
    "$oid": "653265121011a59bebdb74fc"
  },
  "id": 14,
  "name": "Gol Gappe",
  "img": "https://static.toiimg.com/photo/75107900.cms",
  "category": "food",
  "price": 60,
  "quantity": 0
}]



function Foods() {
  let[tot,setTot] = useState(() => {
    const tot = localStorage.getItem('total');
    return tot ? JSON.parse(tot) : 0;
  });
  const [cartitem, setcartitem] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartitem));
    const newTotal = cartitem.reduce((acc, item) => acc + item.price, 0);
    setTot(newTotal);  // Update the total state
    localStorage.setItem('total', JSON.stringify(newTotal));
    console.log(newTotal);
    
  }, [cartitem]);


  const Addtocart = (id)=> {
    const selecteditem = food.find((foodit) => foodit.id === id);
    console.log("Selected Item ID:", selecteditem.id);
    const itemInCart = cartitem.find((item) => item.id === selecteditem.id); // Checking if the item already exists in the cart
    console.log("Item in Cart ID:", itemInCart ? itemInCart.id : "None");

    if (!itemInCart) {
      setcartitem((prevCartItems) => [...prevCartItems, selecteditem]);
      console.log("Added to cart:", selecteditem);
    } else {
      console.log("Item already in cart!");
    }

    console.log("Current Cart Items:", cartitem);

    

    
  }



  const Removefromcart = (id) =>{
    const remitem = cartitem.filter(foodit => foodit.id !== id)
    setcartitem (remitem)
  }



  return (
    
   <foodinfo.Provider value={{ cartitem, setcartitem ,tot,setTot}}>
    <>
    <div>
      <h1 style={{margin:"1%",color:"#494cb6"}}>Food Items</h1>

      <div className="row" id="cards">
        {food.map((foodit) => (
          
          <div className="col-sm-3 mb-3 mb-sm-0" style={{ margin: "2%" }} key={foodit.id}>
            <div className="card" style={{ width: "18rem", height: "400px" }}>
              <img src={foodit.img} className="card-img-top" alt={foodit.name} />
              <div className="card-body" style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <div>
                <h5 className="card-title">{foodit.name}</h5>
                <p className="card-text">Price: Rs.{foodit.price}</p>
                </div>
                <div>
                <button className="btn btn-primary" onClick={() => Addtocart(foodit.id, food)}>
                  Add to cart
                </button>
                </div>
              </div>
            </div>
          </div>
          
        ))}
    
    <div style={{marginTop:"2%",marginBottom:"1%"}}>
      <a href={"/cart"}><button className='btn btn-success'>Go to Cart</button></a>
    </div>
    <br/>
      </div>
    </div>
    
    
    </>
    </foodinfo.Provider>
    

    /* <div>
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
    </div> */
    
    
  );
}
export default Foods

// export const Removefromcart = (id) =>{
//   const remitem = cartitem.filter(foodit => foodit.id !== id)
//   setcartitem (remitem)
// }

// export function Cart({ Removefromcart }) {
  
//   const cartitem = useContext(foodinfo);  

//   if (!Array.isArray(cartitem)) {
//     console.error("cartitem is not an array:", cartitem);
//     return <p>Error: cartitem is not an array</p>;
//   }
//   return (

//     <>
    
    
//     <div>
//       <h1>My Cart</h1>
//       {cartitem.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         cartitem.map((foodit) => (
//           <div key={foodit.id}>
//             <p>
//               {foodit.name} - Rs.{foodit.price}
//               {/* You can pass the Removefromcart function as a prop or handle it differently */}
//               <button className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={() => Removefromcart(foodit.id)}>
//                 Remove
//               </button>
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//     </>
//   );
// }





