import React, { useContext }  from 'react';

import classes from './Store.module.css';
import MusicAlbums from '../albums/MusicAlbums';
import Cart from '../cart/Cart';
import showCartContext from '../store/showCart-Context';


const Store = (props) => {
  // const [showCartItem, setShowCartItem] = useState(false);

  // const cartItemHandler = () => {
  //   setShowCartItem(true);
  // };
    
  const showCartCtx = useContext(showCartContext);

  return (
    <section className={classes.section}>
      <h1>The Generics</h1>
      <MusicAlbums productList={props.productList} />
      {/* {showCartItem && <Cart />} */}
      {/* <button className={classes.button} onClick={cartItemHandler}>See the cart</button> */}
      {showCartCtx.cartState && <Cart onClick={showCartCtx.hideCart}/>}
      <button className={classes.button} onClick={showCartCtx.showCart}>See the cart</button>
    </section>
  );
};

export default Store;