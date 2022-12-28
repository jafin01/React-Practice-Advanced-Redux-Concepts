import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  let cartMessage = '';
  if (cartQuantity < 1) {
    cartMessage = <h4>No items found!!</h4>;
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartMessage}
        {cartItems && cartItems.map((item) => (
          <CartItem
            key={item.itemId}
            item={{
              id: item.itemId,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
}

export default Cart;
