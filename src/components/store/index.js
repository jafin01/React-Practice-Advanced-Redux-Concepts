import { configureStore } from '@reduxjs/toolkit';
import uiSliceReducer from './ui-slice';
import cartSliceReducer from './cart-slice';

// create store
const store = configureStore({
  reducer: { ui: uiSliceReducer, cart: cartSliceReducer },
});

export default store;
