import ModalCart from "./ModalCart";
import CartContext from "../Context/cart-context";
import { useContext } from "react";
import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const cartList =(
    <ul> 
      {cartCtx.products.map((product) => (
    <CartItem
      imageUrl={product.imageUrl}
      product={product.product}
      price={product.price}
      amount={product.amount}
    />
  ))}
  </ul>
  );

  return (
    <ModalCart>
      <h2 style={{ textAlign: "center" }}>Cart</h2>
      <header className={classes.header}>
        <h2>Item Price Amount</h2>
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
