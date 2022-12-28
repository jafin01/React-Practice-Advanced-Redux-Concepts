import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../store/ui-slice';
import classes from './CartButton.module.css';

function CartButton() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <button type="button" onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
}

export default CartButton;
