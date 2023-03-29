import ModalCart from "./ModalCart";
import CartContext from "../Context/cart-context";
import { useContext } from "react";
import React from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount}`;
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      qamount: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      amount: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      amount: 1,
    },
  ];

  const cartList = cartCtx.products.map((product) => (
    <li>
      {product.imageUrl} {product.title} {product.price} {product.amount}
    </li>
  ));

  return (
    <ModalCart>
      <h2 style={{ textAlign: "center" }}>Cart</h2>
      <header bg="dark" variant="dark" expand="sm">
        <button>Item</button>
        <button>Price</button>
        <button>Amount</button>
      </header>
      <div>{cartList}</div>
      <div>
        <span>Total Amount</span>
      <span>{totalAmount}</span>
      </div>
      
      <input type="button" value="Close" onClick={props.onClose} />
      <input type="button" value="Purchase" />
    </ModalCart>
  );
};
export default Cart;
