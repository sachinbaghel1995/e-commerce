import React from 'react';

import classes from './MusicItems.module.css';
import Button from '../UI/Button';

const MusicItems = (props) => {
  return (
    <div className={classes.div}>
      <h3>{props.item.title}</h3>
      <img src={props.item.imageUrl} alt='Music Album' />
      <span>Rs.{props.item.price}</span>
      <Button title='ADD TO CART' />
    </div>
  );
};

export default MusicItems;