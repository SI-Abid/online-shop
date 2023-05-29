import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from "./components/Product";
import { Button } from "./components/Button";
import { Login } from "./components/Login";

const App: React.FC = () => {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([{ name: "test", quantity: 1 }]);
  // const getProducts = async () => {
  //   const response = await fetch("http://localhost:5000/products");
  //   const data = await response.json();
  //   setProducts(data);
  // };
  // getProducts();
  // const addToCart = async (name: string) => {
  //   const prevCart = cart;
  //   // check if product is already in cart
  //   const productInCart = prevCart.find((item: any) => item.name === name);
  //   // if product is in cart
  //   if (productInCart) {
  //     // increase quantity
  //     const newCart = prevCart.map((item: any) => {
  //       if (item.name === name) {
  //         return {
  //           ...item,
  //           quantity: item.quantity + 1,
  //         };
  //       }
  //       return item;
  //     });
  //     setCart(newCart);
  //   }
  //   // if product is not in cart
  //   else {
  //     setCart([...prevCart, { name, quantity: 1 }]);
  //   }
  // };
  // const removeItem = async (name: string) => {
  //   const prevCart = cart;
  //   // check if product is already in cart
  //   const productInCart = prevCart.find((item: any) => item.name === name);
  //   if (productInCart && productInCart.quantity === 1) {
  //     const newCart = prevCart.filter((item: any) => item.name !== name);
  //     setCart(newCart);
  //     return;
  //   }
  //   // if product is in cart
  //   if (productInCart) {
  //     // increase quantity
  //     const newCart = prevCart.map((item: any) => {
  //       if (item.name === name) {
  //         return {
  //           ...item,
  //           quantity: item.quantity - 1,
  //         };
  //       }
  //       return item;
  //     });
  //     setCart(newCart);
  //   }
  // };
  return (
    // <>
    <Login />
    //   <div className="container">
    //     <h1>Products</h1>
    //     <hr />
    //     {/* cart view */}
    //     <div className="row">
    //       <div className="col-sm-3">
    //         <h3>Cart</h3>
    //         <hr />
    //         {/* if empty */}
    //         {cart.length === 1 && <p>Cart is empty</p>}
    //         {/* if not empty */}
    //         {cart.length !== 1 && (
    //           <>
    //             {cart.map(
    //               (item: any) =>
    //                 // if item is not test
    //                 item.name !== "test" && (
    //                   <div key={item.name}>
    //                     <p>
    //                       {item.name} x {item.quantity}
    //                     </p>
    //                   </div>
    //                 )
    //             )}
    //           </>
    //         )}
    //       </div>
    //     </div>
    //     <hr />

    //     {/* grid view */}
    //     <div className="row">
    //       {products.map((product: any) => (
    //         <div className="col-sm-3 mb-2" key={product.name}>
    //           <Product
    //             name={product.name}
    //             price={product.price}
    //             quantity={product.quantity}
    //           >
    //             {/* button in a row */}
    //             <div className="row">
    //               <div className="col-sm-3">
    //                 <Button onClick={() => addToCart(product.name)}>Add</Button>
    //               </div>
    //               <div className="col-sm-3">
    //                 <Button onClick={() => removeItem(product.name)}>
    //                   Remove
    //                 </Button>
    //               </div>
    //             </div>
    //           </Product>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </>
  );
};

export default App;
