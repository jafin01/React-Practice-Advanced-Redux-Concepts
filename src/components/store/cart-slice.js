/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.cartItems = action.payload.cartItems;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingCartItem = state.cartItems.find((item) => item.itemId === newItem.id);

      state.totalQuantity++;
      state.changed = true;

      if (!existingCartItem) {
        state.cartItems.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingCartItem.quantity++;
        existingCartItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.changed = true;
      const existingCartItem = state.cartItems.find((item) => item.itemId === id);
      if (existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.itemId !== id);
      } else {
        existingCartItem.quantity--;
        existingCartItem.totalPrice -= existingCartItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
