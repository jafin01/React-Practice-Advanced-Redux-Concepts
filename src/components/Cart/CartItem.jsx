import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import classes from './CartItem.module.css';

function CartItem(props) {
  const dispatch = useDispatch();
  const { item } = props;
  const {
    title, quantity, total, price, id,
  } = item;

  const increaseCartQuantityHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  const decreaseCartQuantityHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          $
          {total.toFixed(2)}
          {' '}
          <span className={classes.itemprice}>
            ($
            {price.toFixed(2)}
            /item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x
          {' '}
          <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={decreaseCartQuantityHandler}>-</button>
          <button type="button" onClick={increaseCartQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
