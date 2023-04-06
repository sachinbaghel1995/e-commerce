import { useState } from "react";
import HeaderCartButton from "../components/Cart/HeaderCartButton";
import { NavLink, useParams } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import ProductsDetail from "../components/Form/ProductsDetail";
import CartProvider from "../components/Context/CartProvider";
import React from "react";
import MainNavigation from "../components/MainNavigation";
// import { useParams } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../components/Context/Login-context";

const Products = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  const params=useParams()
  const authCtx=useContext(AuthContext)
  if(params.idToken!==authCtx.token){
   return <p>Page not found!</p>
  }
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
