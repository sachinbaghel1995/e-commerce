// import { useState } from "react";
// import HeaderCartButton from "../components/Cart/HeaderCartButton";
// import { NavLink } from "react-router-dom";
// import Cart from "../components/Cart/Cart";
// import ProductsDetail from "../components/Form/ProductsDetail";
// import CartProvider from "../components/Context/CartProvider";

// const Products = () => {
//   const [showCart, setShowCart] = useState(false);

//   const showCartHandler = () => {
//     setShowCart(true);
//   };
//   const hideCartHandler = () => {
//     setShowCart(false);
//   };
//   return (
//     <div>
//       <CartProvider>
//         <HeaderCartButton onClick={showCartHandler} />
//         {showCart && <Cart onClose={hideCartHandler} />}
//         <ProductsDetail />
//       </CartProvider>
//     </div>
//   );
// };
// export default Products;
