import React, { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button } from "./Button";

interface Props {
  user: {
    username: string;
    email: string;
    password: string;
  };
  children: ReactNode;
}

class Item {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  constructor(id: string, name: string, price: number, qty = 1) {
    this._id = id;
    this.name = name;
    this.price = price;
    this.quantity = qty;
  }
}

export const Home = ({ user, children }: Props) => {
  const [products, setProducts] = useState<Item[]>([]);
  const [cart, setCart] = useState<Item[]>([]);
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const handleAddToCart = (product: Item) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = [
        ...cart,
        new Item(product._id, product.name, product.price),
      ];
      setCart(updatedCart);
    }
  };
  const handleRemoveFromCart = (product: Item) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      if (existingProduct.quantity === 1) {
        const updatedCart = cart.filter((item) => item._id !== product._id);
        setCart(updatedCart);
      } else {
        const updatedCart = cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCart(updatedCart);
      }
    }
  };
  const handlePlaceOrder = () => {
    axios
      .post("http://localhost:5000/products/orders", {
        username: user.username,
        products: cart,
      })
      .then((res) => {
        console.log(res.data);
        setCart([]);
        setShowCart(false);
      });
    
  };
  console.log(products);
  return (
    <div className="container mt-2">
      <div className="row">
        <h1 className="col-sm-8 col-md-6 col-lg-4">Welcome {user.username}</h1>
        <div className="text-right d-flex align-items-center justify-content-end col-sm-4 col-md-6 col-lg-8">
          {children}
          <Button onClick={() => setShowCart(!showCart)}>
            Cart({cart.reduce((acc, item) => acc + item.quantity, 0)})
          </Button>
        </div>
      </div>
      {showCart && (
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Cart</h2>
              <Button onClick={handlePlaceOrder}>Place Order</Button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                ))}
                {/* total */}
                <tr>
                  <td colSpan={2} align="left">
                    <b>Total Bill</b>
                  </td>
                  <td>{cart.reduce((acc, item) => acc + item.quantity, 0)}</td>
                  <td>
                    {cart.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="row">
        {products.map((product: Item) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="d-flex justify-content-between">
                  <strong className="card-text">
                    Price: {product.price}💲
                  </strong>
                  <strong className="card-text">
                    In stock: {product.quantity}
                  </strong>
                </div>
                <div className="d-flex justify-content-between">
                  <a
                    href="#"
                    className="btn btn-success"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </a>
                  <a
                    href="#"
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(product)}
                  >
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
