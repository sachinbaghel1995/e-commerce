import ProductForm from "./ProductForm";
import { useContext } from "react";
import CartContext from "../Context/cart-context";
import classes from "./ProductItem.module.css";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addProduct({
      product: props.product,
      amount: amount,
      price: props.price,
      imagrUrl: props.imagrUrl,
    });
  };
  return (
    
      <div className={classes.gallery}>
        <img className={classes.image} src={props.imageUrl} />
        <div className={classes.desc}>
        <h3 className={classes.products}>{props.product}</h3>
        <div className={classes.amount}>{props.amount}</div>
        <div className={classes.price}>{props.price}</div>
        <NavLink to="/products/:productId" className={classes.link}>
          See Details
        </NavLink>
        <ProductForm className={classes.form} onAddToCart={addToCartHandler} />
        </div>
      </div>
    
  );
};
export default ProductItem;
