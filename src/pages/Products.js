import { useState } from "react";
import HeaderCartButton from "../components/Cart/HeaderCartButton";
import { NavLink } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import ProductsDetail from "../components/Form/ProductsDetail";
import CartProvider from "../components/Context/CartProvider";
import React from "react";
import MainNavigation from "../components/MainNavigation";

const Products = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <React.Fragment>
      <CartProvider>
        <MainNavigation/>
        <HeaderCartButton onClick={showCartHandler} />
        {showCart && <Cart onClose={hideCartHandler} />}
        <ProductsDetail />
      </CartProvider>
    </React.Fragment>
  );
};
export default Products;
