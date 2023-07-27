import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlice';
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});
