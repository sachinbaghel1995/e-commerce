import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MusicItems.module.css';
import Button from '../UI/Button';
import cartContext from '../store/cart-context';
import productContext from '../store/product-context';

const MusicItems = (props) => {

  const cartCtx = useContext(cartContext);
  const productCtx = useContext(productContext);

  const product = {
    title: props.item.title,
    imageUrl: props.item.imageUrl,
    price: props.item.price,
    quantity: 1
  };

  const addingItemToCartHandler = (item) => {
    cartCtx.addItem(item);
  };

  const productDetail = {
    title: props.item.title,
    imageUrl: props.item.imageUrl,
    price: props.item.price,
    rating: 4.5,
    detail: 'Best Color among the four',
  };

  const productDetailHandler = (item) => {
    // console.log(item);
    productCtx.changeDetail(item);
  };

  return (
    <div className={classes.div}>
      <h3>{props.item.title}</h3>
      <Link to={`/product/${props.item.title}`}>
        <img
          src={props.item.imageUrl}
          alt='Music Album'
          onClick={productDetailHandler.bind(null, productDetail)}
        />
      </Link>
      <span>Rs.{props.item.price}</span>
      <Button
        title='ADD TO CART'
        onClick={addingItemToCartHandler.bind(null, product)}
      />
    </div>
  );
};

export default MusicItems;